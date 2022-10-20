import React , { useContext,useState } from 'react'
import BtnRender from './BtnRender2'
import {GlobalState} from '../../../../../GlobalState'
import "../../../../../../src/index.css";



function FoodItem2({food, deleteFood, handleCheck}) {
    const [ setShowModal] = useState(false);
    const state = useContext(GlobalState)
    const [foods] = state.foodsAPI.foods
    //const [categories] = state.categoriesAPI.categories
    const [ setModalData] = useState({});
    return (
        <div>
             
             
                <div class="table">
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


