import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import profile from"./icon/kl.png";
import '../headersk/header.css'
import Filters from '../mainpagesk/pakages/Filters'
function Header() {
    const state = useContext(GlobalState)
    const [cart] = state.sellpackAPI.cart
    const [menu, setMenu] = useState(false)
    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
       
       <header>
          
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>
         
           
            <div className="photo">
           <div className="container-image1">
          <img src={profile} alt="profile" className="profile"/>

</div>
</div><Filters />
            <ul style={styleMenu}>
              

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul> 
            
              <div class="menu1">ADMIN</div>
        
            {
                
                <div className="menu2">
              
                <button className=' '><Link to={"/create_pakage"}>Create pakage</Link></button>
                <button><Link to={"/category"}>create new catagory</Link></button>
                <button><Link to={"/"}>Packages</Link></button>

            </div>
            }
            
        
        </header>
        
       
    )
}

export default Header


