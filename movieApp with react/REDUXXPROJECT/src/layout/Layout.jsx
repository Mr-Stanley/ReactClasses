import { Outlet} from "react-router-dom";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import style from "../styles/Layout.module.css";


const Layout = () => {
    return (
        <>
        <Header/>
        <div className = {style.Outletcontainer}>
            <Sidebar/>
            <Outlet/>


        </div>
        
        <Footer/>
        </>
    )
}

export default Layout;