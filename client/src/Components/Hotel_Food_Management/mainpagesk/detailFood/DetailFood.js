import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import FoodItem from '../utils/foodItem/FoodItem'

function DetailFood() {
    const param = useParams()
    const state = useContext(GlobalState)
    const [foods] = state.foodsAPI.foods
    const [detailFood, setDetailFood] = useState([])

    useEffect(() =>{
        if(param.id){

            foods.forEach(food => {
                if(food._id === param.id) setDetailFood(food)
            })
        }
    },[param.id, foods])

    if(detailFood.length === 0) return null;

    return (
        <>
            <div className="detail">
                <img src={detailFood.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailFood.title}</h2>
                    </div>
                    <span>LKR {detailFood.price}</span>
                    <p>{detailFood.description}</p>
                </div>
            </div>

            <div>
                <h2>Related foods</h2>
                <div className="foods">
                    {
                        foods.map(food => {
                            return food.category === detailFood.category 
                                ? <FoodItem key={param._id} food={food} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailFood




