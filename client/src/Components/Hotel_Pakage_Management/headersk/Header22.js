// import React, {useContext, useState} from 'react'
// import {GlobalState} from '../../../GlobalState'
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
// import Cart from './icon/cart.svg'
// import {Link} from 'react-router-dom'
// import prof from"./icon/nl.jpg";

// import Filters from '../mainpagesk/pakages/Filters'
// function Header22() {
//     const state = useContext(GlobalState)
//     const [cart] = state.sellpackAPI.cart
//     const [menu, setMenu] = useState(false)
//     const styleMenu = {
//         left: menu ? 0 : "-100%"
//     }

//     return (
       
    
          
         

//             <div className="photo">
//           <img src="https://img.freepik.com/free-vector/female-student-studying-with-laptop_74855-2396.jpg?w=2000" />
//         </div>
          
        
            
 
        
       
//     )
// }

// export default Header22


import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import prof from"./icon/nl.jpg";

import Filters from '../mainpagesk/pakages/Filters'
function Header22() {
    const state = useContext(GlobalState)
    const [cart] = state.sellpackAPI.cart
    const [menu, setMenu] = useState(false)
    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
       
    
          
         

            <div className="photo">
          <img src="https://img.freepik.com/free-vector/female-student-studying-with-laptop_74855-2396.jpg?w=2000" />
        </div>
          
        
            
 
        
       
    )
}

export default Header22


