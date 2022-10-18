import React from 'react'
import BtnRender from './BtnRender'

function FoodItem({food, deleteFood}) {

    return (
        <div className="food_card">
          
            <img src={food.images.url} alt="" />

            <div className="food_box">
                <h2 title={food.title}>{food.title}</h2>             
                <p>{food.description}</p>
                <span>LKR{food.price}</span>
            </div>

            
            <BtnRender food={food} deleteFood={deleteFood} />
        </div>
    )
}



















export default FoodItem


