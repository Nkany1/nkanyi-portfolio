import React from "react";
import styles from "../styles/components/Layout.module.css"
import NavBar from "./NavBar";
import Hero from "../section/Hero";
import About from "../section/About";
import WhySov from "../section/WhySov";
import Footer from "../section/Footer";

const Layout = ({children}) => {
    return ( 
     <div className={styles.container}>
        <NavBar />
        <main className={styles.main}>
            <Hero />
            <About />
            <WhySov />
            <Footer />
            {children}
        </main>
      </div>
     );
}
 
export default Layout;