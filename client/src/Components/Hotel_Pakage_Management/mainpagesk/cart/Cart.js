import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.sellpackAPI.cart

    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
      
        })
    }

    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removePakage = id =>{
        if(window.confirm("Do you want to delete this pakage?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {

        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }

    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 

    return (
        <div>
            {
                cart.map(pakage => (
                    <div className="detail cart" key={pakage._id}>
                        <img src={pakage.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{pakage.title}</h2>

                            <h3>$ {pakage.price * pakage.quantity}</h3>
                            <p>{pakage.description}</p>
                            <p>{pakage.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(pakage._id)}> - </button>
                                <span>{pakage.quantity}</span>
                                <button onClick={() => increment(pakage._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removePakage(pakage._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Total: $ {total}</h3>
                <PaypalButton
                total={total}
                tranSuccess={tranSuccess} />
            </div>
        </div>
    )
}

export default Cart


