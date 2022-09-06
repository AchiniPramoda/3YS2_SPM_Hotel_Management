import React, {useState, useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import axios from 'axios'
import Header3 from '../../headersk/Header3'
import Footer from '../../headersk/Footer'
function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')

    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCategory = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
                const res = await axios.put(`/api/category/${id}`, {name: category}, {
               
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
        <div className='kavi'><Header3></Header3>
       <h3>{onEdit? "Update Category" : "Create Category"}</h3>

        <div className="categories">
          <div className='kavi'>
            <form onSubmit={createCategory}>
                <label htmlFor="category">...Category...</label>
                <input type="text" name="category" value={category} required
                onChange={e => setCategory(e.target.value)} />

                <button type="submit">{onEdit? "Update" : "Create "}</button>
            </form>
</div>
            <div className="col1">
                {
                    categories.map(category => (
                        <div className="row" key={category._id}>
                            <p>{category.name}</p>
                            <div>
                                <button1 type="submit"onClick={() => editCategory(category._id, category.name)}>UPDATE </button1>
                                <button2 onClick={() => deleteCategory(category._id)}>Delete</button2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <Footer></Footer>
        </div>

    )
}

export default Categories
