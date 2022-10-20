import React, {useState, useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import axios from 'axios'
import { Link } from "react-router-dom";
import Footer from '../../headersk/Footer'
import "./categories.css"
import '../../../../../src/index.css'
import Navbar from '../../../Navbar/NavbarResAdmin'
import { MdArrowBackIosNew } from "react-icons/md"
import { GiHotMeal } from "react-icons/gi"


function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI1.categories
    const [category, setCategory] = useState('')

    const [callback, setCallback] = state.categoriesAPI1.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCategory = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                const res = await axios.put(`http://localhost:8345/api/category/${id}`, {name: category}, {
               
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('http://localhost:8345/api/category', {name: category}, {
             
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name) =>{
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCategory = async id =>{
        try {
            const res = await axios.delete(`http://localhost:8345/api/category/${id}`, {
      
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div>
        <Navbar/>
    <div className="container1">
    
    <div className="row g-0">
        <div className="cl">
        <div className="card-body">
        <h4 className="card-title  mt-3">
       {onEdit? "Update Category" : "Create Category"}</h4>
       <hr classNameName="mb-3" />
        <div className="categories">
          <div className='kavi'>
            <form onSubmit={createCategory}>
                <label htmlFor="category">...Category...</label>
                <input  class="form-control"  placeholder='Enter New Catagory' type="text" name="category" value={category} required
                onChange={e => setCategory(e.target.value)} />

                <button type="submit" className='submit'>{onEdit? "Update" : "Create "}</button>
            </form>
</div>
            <div className="col1">
                {
                    categories.map(category => (
                        <div className="row" key={category._id}>
                            <p>{category.name}</p>
                            <div>
                                <button className='button1' type="submit"onClick={() => editCategory(category._id, category.name)}>UPDATE </button>
                                <button  className='button2' onClick={() => deleteCategory(category._id)}>Delete</button>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
        
                </div>
            </div>
        </div>
        <tr className='gap'></tr>
        </div>
        <div className='row'>
                <button type="button"  className="back"><Link className='link-o'to="/adminfirst"><MdArrowBackIosNew style={{color: '#E8861E', fontSize: '20px'}}/>  Back</Link></button>
                <button type="button"  className="viewList"><Link className='link-o'to="/create_food">Add Food  <GiHotMeal style={{color: '#E8861E', fontSize: '20px'}}/></Link></button>
                </div>
                <tr className='gap'></tr>
        <Footer></Footer>
        </div>

    )
}

export default Categories
