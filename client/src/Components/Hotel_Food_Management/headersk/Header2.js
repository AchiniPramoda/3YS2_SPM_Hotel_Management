import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

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

            <div className="logo">
                <h1>
             
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{ cart}</Link></li>

              

                {
                 <><li><Link to="/cart">cart</Link></li><li><Link to="/create_food">create food</Link></li><li><Link to="/category">create_category</Link></li><li><Link to="/history">payments history</Link></li></>
            
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header


