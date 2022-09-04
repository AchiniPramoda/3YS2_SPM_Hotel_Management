import {useState} from 'react'
import axios from 'axios'

function SellpackAPI(){

    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
   const addCart = async (pakage) => {
      

        const check = cart.every(item =>{
            return item._id !== pakage._id
        })

        if(check){
            setCart([...cart, {...pakage, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...pakage, quantity: 1}]}, {
      
            })

        }else{
            alert("This pakage has been added to cart.")
        }
    }

    return {
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

export default SellpackAPI
 

