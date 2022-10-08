import React , { useContext,useState } from 'react'
import BtnRender from './BtnRender2'
import {GlobalState} from '../../../../../GlobalState'
import "./foodItem.css";
//import React, { useContext, useEffect, useState } from "react";


function FoodItem2({food, deleteFood, handleCheck}) {
    const [showModal, setShowModal] = useState(false);
    //const [loading, setLoading] = useState(false);
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.foodsAPI.foods
    const [modalData, setModalData] = useState({});
    return (
        <div className="div">
            {/* {
             <input type="checkbox" checked={food.checked}
                onChange={() => handleCheck(food._id)} />
            }
               <img src={food.images.url} alt="" />

            <div className="food_box">
                <h2 title={food.title}>{food.title}</h2>   
                <p>{food.description}</p>
                <span>LKR...{food.price}</span>
            </div>

            
            <BtnRender food={food} deleteFood={deleteFood} /> */}
                <div class="table">
                            <table class="table table-hover text-center ">
                                <thead className="head">
                                <th scope="col">Food id</th>
                                        <th scope="col">Food title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Actions</th>
                                       
                                </thead>
                        <tbody>
                    {foods.map((food) => (
                      <tr
                        key={food._id}
                        onClick={() => {
                          setModalData({});
                          setModalData(food);
                          setShowModal(true);
                        }}
                      ><th scope="row">{food._id}</th>
                      <td>{food.title}</td>
                      <td>{food.description}</td>
                      <td>{food.price}</td>
                      <td><img src={food.images.url}  alt="" /></td>
                      <td><BtnRender food={food} deleteFood={deleteFood} /></td>
                    </tr>
                  ))}
                        </tbody>
                                
                </table>
            </div>
        </div>

        
    )
}

export default FoodItem2


