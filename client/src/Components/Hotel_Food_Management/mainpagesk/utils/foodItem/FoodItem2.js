import React , { useContext,useState } from 'react'
import BtnRender from './BtnRender2'
import {GlobalState} from '../../../../../GlobalState'
import "../../../../../../src/index.css";
//import React, { useContext, useEffect, useState } from "react";


function FoodItem2({food, deleteFood, handleCheck}) {
    const [showModal, setShowModal] = useState(false);
    //const [loading, setLoading] = useState(false);
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.foodsAPI.foods
    const [modalData, setModalData] = useState({});
    return (
        <div>
             
             
                <div class="table1">
                            <table class="table table-hover text-center ">
                                <thead className="head">
                                <th scope="col">Title</th>
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
                      ><td scope="row">{food.title}</td>
                      <td>{food.description}</td>
                      <td>{food.price}</td>
                      <td><img className="resturantImage" src={food.images.url}  alt="" /></td>
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


