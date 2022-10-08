import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../../GlobalState'
import FoodItem2 from '../utils/foodItem/FoodItem2'
import Loading from '../utils/loading/Loading'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

import LoadMore from './LoadMore'
import Header4 from '../../headersk/Header4'
import './foods1.css';
import Footer from '../../headersk/Footer'
//import { param } from '../../../../../../Server/routes/categoryRouter'

function Foods2() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.foodsAPI.foods
  
  
    const [callback, setCallback] = state.foodsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)


    // const handleCheck = (id) =>{
    //     pakages.forEach(pakage => {
    //         if(pakage._id === id) pakage.checked = !pakage.checked
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

   
    // const checkAll = () =>{
    //     foods.forEach(food => {
    //         food.checked = !isCheck
    //     })
    //     setPakages([...pakages])
    //     setIsCheck(!isCheck)
    // }

    const deleteAll = () =>{
        foods.forEach(food => {
            if(food.checked) deleteFood(params._id, food.images.public_id)
        })
    }
 

    if(loading) return <div><Loading /></div>
    return (
        <>
         <Header4></Header4>
         <div className="delete-all1">
                

            </div>
         <div className="delete-all">
                <span>Select all</span>
                {/* <input type="checkbox" checked={isCheck} onChange={checkAll} /> */}
                <button onClick={deleteAll}>Delete ALL</button>
           
            </div>
          
            <div className="delete-all2">
                
            </div>

       <div className="foods">
      

        
            {
                foods.map(food => {
                    return <FoodItem2 key={params._id} food={food}
                   deleteFood={deleteFood}  />
                })
            } 
    
       </div>
        <LoadMore />
        {foods.length === 0 && <Loading />}
        <Footer></Footer></>
        
    )
  
}

export default Foods2

