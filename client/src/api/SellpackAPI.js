import {useState} from 'react'
import axios from 'axios'

function SellpackAPI(){

    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
   
   const addCart = async (food) => {
      

        const check = cart.every(item =>{
            return item._id !== food._id
        })

        if(check){
            setCart([...cart, {...food, quantity: 1}])

            await axios.patch('http://localhost:8345/user/addcart', {cart: [...cart, {...food, quantity: 1}]}, {
      
            })

        }else{
            alert("This food has been added to cart.")
        }
    }

    return {
   
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

export default SellpackAPI
 

