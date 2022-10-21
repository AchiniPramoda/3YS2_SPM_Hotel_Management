

import React, { useState} from 'react'

import Menu from './icon/menu.svg'
import Close from './icon/close.svg'

import {Link} from 'react-router-dom'
import profile from"./icon/ad.png";

import '../headersk/header.css'
import Filters from '../mainpagesk/pakages/Filters'
function Header() {
  
   
    const [menu, setMenu] = useState(false)
    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
       
       <header>
   
   <div className="photo">
         
         <img src={profile} alt="profile" className="profile"/>

</div>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>
         
        





<Filters />
            <ul style={styleMenu}>
              

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul> 
            
            {
                
                
            }

            {
                
                <div className="menu82">
              
          

            </div>



            }


           
<div class="topnav">
<><Link to={"/create_pakage"}>Create package ✥ </Link></>
                <><Link to={"/category"}>create category✥ </Link></>
                <><Link to={"/AllPacakages"}>ALL Packages✥</Link></>
                <><Link to={"/packagereport"} >Package Report✥ </Link></>
              
</div> 
   
     
        </header>
        
       
    )
}

export default Header



