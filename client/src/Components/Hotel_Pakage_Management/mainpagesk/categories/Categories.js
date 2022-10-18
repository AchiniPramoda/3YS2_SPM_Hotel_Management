import React, {useState,useEffect, useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import axios from 'axios'

import Footer from '../../headersk/Footer'
import "./categories.css"
import GeneratePdf from '../../ReportGenerator'
import "../../ReportGenerator"


function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')

    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')
   
 
    
    const [users,setUsers] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/category").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])


 const createCategory = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                const res = await axios.put(`/api/category/${id}`, {name: category,title:category}, {
               
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('/api/category', {name: category}, {
             
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
            const res = await axios.delete(`/api/category/${id}`, {
      
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className='kavi'>
            
            
            
   



          <h3>{onEdit? "Update Category" : "Create Category"}</h3>

<div className="categories">
  <div className='kavi'>
    <form onSubmit={createCategory}>
        <label htmlFor="category">...Category...</label>
        <input  class="form-control"  placeholder='Enter New Catagory' type="text" name="category" value={category} required
        onChange={e => setCategory(e.target.value)} />

        <button type="submit" style={{color:""}}>{onEdit? "Update" : "Create "}</button>
    </form>
</div>
    <div className="col1">
        {
            categories.map(category => (
                <div className="row" key={category._id}>
                    <p>{category.name}</p>
                    <div>
                        <button1 type="submit" style={{color:"#fff",height: "50px",padding: "10px",background: "rgb(17, 146, 45)"
                    
         }}onClick={() => editCategory(category._id, category.name)}>UPDATE </button1>
                        <button2 style={{color:"#fff",height: "50px",padding: "10px",background: " #F14668"}} onClick={() => deleteCategory(category._id)}>Delete</button2>
                        
                    </div>
                </div>
                
            ))
        }
        
    </div>
    <div className="">
        <div className="row1">
            {
                <div className="row1">
                   
                       <button style={{background: "#fff", width: "50%" , marginLeft:"346px"} } onClick={()=>GeneratePdf(users)}>Genarate Report</button>  
                </div>
            }
        </div>
        
    </div>
</div>











            
            
          
            
            
            
            
            
            
            
            
            
            
            
    
        
      
         
        <Footer></Footer>
        </div>

    )
}

export default Categories
