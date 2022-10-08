import React, {useEffect,useContext, useState} from 'react'
import {GlobalState} from '../../../../GlobalState'
import FoodItem2 from '../utils/foodItem/FoodItem2'
import Loading from '../utils/loading/Loading'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Navbar from '../../../Navbar/NavbarResAdmin'
import LoadMore from './LoadMore'
import Header4 from '../../headersk/Header4'
import './foods1.css';
import Footer from '../../headersk/Footer'
import GeneratePdf from "./ReportGenerator";
import { FaRegListAlt, FaPlusCircle } from 'react-icons/fa';
//import { param } from '../../../../../../Server/routes/categoryRouter'

function Foods2() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [foods, setFoods] = state.foodsAPI.foods
  
  
    const [callback, setCallback] = state.foodsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [pdf,setPDF] = useState([]);
  //this.state={isGen: false}
  const [isGen] = useState(false)


    // const handleCheck = (id) =>{
    //     pakages.forEach(pakage => {
    //         if(pakage._id === id) pakage.checked = !pakage.checked
    //     })
    //     setPakages([...pakages])
    // }
    useEffect(() => {

        axios.get("http://localhost:8345/api/foods").then((res) => {
            console.log(res.data.foods);
            setPDF(res.data.foods);
        }).catch((err) => {
            console.log(err);
        })

    }, [])
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
 

    // if(loading) return <div><Loading /></div>
    return (
        <>
         <div>
            <Navbar/>

            <div className="container2">
            <tr className='gap'></tr>
            <h3 className={"text-dark text-center"}>All Restaurants</h3>
                    <div className='gapTitle'></div>
                    <button type="button"  className="createRes"><Link className='link-o' to="/admin/restaurants/CreateRestaurant">Create Restaurant <FaPlusCircle style={{color: '#E8861E', fontSize: '20px'}}/></Link></button>
                   <button   className="generateRes" onClick={()=>GeneratePdf(pdf)}>
                                    Generate Report </button>
                                    <div className="foods">
      

        
      {
          foods.map(food => {
              return <FoodItem2 key={params._id} food={food}
             deleteFood={deleteFood}  />
          })
      } 

 </div>
                
            
                   
                            </div>
                        </div>
                    
       
        <LoadMore />
        {foods.length === 0 && <Loading />}
        <Footer></Footer></>
        
    )
  
}

export default Foods2

