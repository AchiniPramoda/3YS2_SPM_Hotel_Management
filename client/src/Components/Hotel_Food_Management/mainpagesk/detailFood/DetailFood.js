import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
//import { param } from '../../../../../../Server/routes/categoryRouter'
import {GlobalState} from '../../../../GlobalState'
import FoodItem from '../utils/foodItem/FoodItem'

function DetailFood() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [foods] = state.foodsAPI.foods
    const addCart = state.sellpackAPI.addCart
    const [detailFood, setDetailFood] = useState([])

    useEffect(() =>{
        if(params.id){

            foods.forEach(food => {
                if(params._id === params.id) setDetailFood(food)
            })
        }
    },[params.id, foods])

    if(detailFood.length === 0) return null;

    return (
        <>
            <div className="detail">
                <img src={detailFood.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailFood.title}</h2>
                        {/* <h6>#id: {detailPakage.pakage_id}</h6> */}
                    </div>
                    <span>LKR {detailFood.price}</span>
                    <p>{detailFood.description}</p>
                    {/* <p>{detailFood.content}</p>
                    <p>Sold: {detailPakage.sold}</p> */}
                    {/* <Link to="/cart" className="cart"
                    onClick={() => addCart(detailPakage)}>
                        BOOK
                    </Link> */}
                </div>
            </div>

            <div>
                <h2>Related foods</h2>
                <div className="foods">
                    {
                        foods.map(food => {
                            return food.category === detailFood.category 
                                ? <FoodItem key={params._id} food={food} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailFood




