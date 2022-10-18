import React, {useState} from 'react'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import profile from"./icon/kl.png";

function Header() {
    
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
</div>
            <ul style={styleMenu}>
              

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul> 
        
            {
                
             
            }
            
        
        </header>
        
       
    )
}

export default Header


