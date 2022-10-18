import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../../GlobalState'
import FoodItem from '../utils/foodItem/FoodItem'
import {useParams, Link} from 'react-router-dom'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'
import Header from '../../headersk/Header'
import Footer from '../../headersk/Footer'
//import { param } from '../../../../../../Server/routes/categoryRouter'

function Foods() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.foodsAPI.foods
 
    const [callback, setCallback] = state.foodsAPI.callback
    const [loading, setLoading] = useState(false)
   

    // const handleCheck = (id) =>{
    //     foods.forEach(food => {
    //         if(param._id === id) pakage.checked = !pakage.checked
    //     })
    //     setPakages([...pakages])
    // }

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

           <Header />
      
      
       

        <div className="foods">
            {
                foods.map(food => {
                    return <FoodItem key={params._id} food={food}
                     deleteFood={deleteFood}  />
                })
            } 
       
</div>     <Footer />
        <LoadMore />
        {foods.length === 0 && <Loading />}
        </>
    
    )
}

export default Foods


