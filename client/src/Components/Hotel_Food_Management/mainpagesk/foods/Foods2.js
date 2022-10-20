import React, {useEffect,useContext, useState} from 'react'
import {GlobalState} from '../../../../GlobalState'
import FoodItem2 from '../utils/foodItem/FoodItem2'
import Loading from '../utils/loading/Loading'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../../Navbar/NavbarResAdmin'
import LoadMore from './LoadMore'
import "../../../../../src/index.css"
import Footer from '../../headersk/Footer'
import GeneratePdf from "./ReportGenerator";
import {MdArrowBackIosNew} from 'react-icons/md';
import { FaPlusCircle } from 'react-icons/fa';

function Foods2() {

    const state = useContext(GlobalState)
    const [foods ,setFoods] = state.foodsAPI.foods
    const [callback, setCallback] = state.foodsAPI.callback
    const [loading,  setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [pdf,setPDF] = useState([]);
    
    const handleCheck = (id) =>{
        foods.forEach(food => {
            if(food._id === id) food.checked = !food.checked
        })
        setFoods([...foods])
    }

   
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
    const checkAll = () =>{
        foods.forEach(food => {
            food.checked = !isCheck
        })
        setFoods([...foods])
        setIsCheck(!isCheck)
    }

   
    


 

    
    return (
        <>
         <div>
            <Navbar/>

            <div className="container2">
            
            <tr className='gap'></tr>
            <h3 className={"text-dark text-center"}>All Foods</h3>
                    <div className='gapTitle'></div>
                    <button type="button"  className="createRes"><Link className='link-o' to="/create_food">Create Foods <FaPlusCircle style={{color: '#E8861E', fontSize: '20px'}}/></Link></button>
                   <button   className="generateRes" onClick={()=>GeneratePdf(pdf)}> Generate Report </button>
                                 
      
                    <FoodItem2 
                   deleteFood={deleteFood}  />
            
        
        <LoadMore />
        {foods.length === 0 && <Loading />}

 
                
                                
                   
                            </div>
                            <div className='row'>
                <button type="button"  className="back-center"><Link className='link-o'to="/adminfirst"><MdArrowBackIosNew style={{color: '#E8861E', fontSize: '20px'}}/>  Back</Link></button>
                
                </div>
                <tr className='gap'></tr>
                        </div>
                    
       
       
        
        <Footer></Footer></>
        
    )
  
}

export default Foods2

