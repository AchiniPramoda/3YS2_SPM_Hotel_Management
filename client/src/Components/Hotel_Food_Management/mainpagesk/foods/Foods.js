import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../../GlobalState'
import FoodItem from '../utils/foodItem/FoodItem'
import {useParams} from 'react-router-dom'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import LoadMore from './LoadMore'
import Header from '../../headersk/Header'
import Footer from '../../headersk/Footer'
import Navbar from '../../../Navbar/NavbarFood'
import './foods.css'

function Foods() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [foods] = state.foodsAPI.foods
 
    const [callback, setCallback] = state.foodsAPI.callback
    const [loading, setLoading] = useState(false)
   

    
    const deleteFood = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('http://localhost:8345/api/destroy', {public_id},{
         
            })
            const deleteFood = axios.delete(`http://localhost:8345/api/foods/${id}`, {
       
            })

            await destroyImg
            await deleteFood
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

   

   

    if(loading) return <div><Loading /></div>
    return (
        <>
<div>
    <Navbar/>
    <tr className='gap'></tr>
           <Header />
      
           <tr className='gap'></tr>
           
        <div className="foods">
            {
                foods.map(food => {
                    return <FoodItem key={params._id} food={food}
                     deleteFood={deleteFood}  />
                })
            } 
       
</div>  
<LoadMore />
        {foods.length === 0 && <Loading />}
  
</div>
 
<Footer />
        </>
    
    )
}

export default Foods


