import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../ASSETS/LOGO/Netflix-Logo1.png";

import Avatar from "../../ASSETS/AVATAR/Netflix-avatar.png";

import { useState } from "react";

const Navbar=() =>{

    /*
    const[show,setShow]=useState[false];
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setShow(true);}
                else setShow(false);


            });
            return()=>{
                window.removeEventListener("scroll");
            };
        },[]);*/
    {
        
    return (
        
        <div className="navbar1">
        <img className="netlog1"alt="net"src={logo}/>
    
        <img className="avatar1"alt="avt"src={Avatar}  />
        
        </div>
    )
        
    } 
    ;}

export default Navbar;