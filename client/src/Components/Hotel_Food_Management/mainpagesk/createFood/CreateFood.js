import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md"
import {BsCardList} from "react-icons/bs"
import {GlobalState} from '../../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useNavigate,useParams} from 'react-router-dom'
import Footer from '../../headersk/Footer'
import Navbar from '../../../Navbar/NavbarResAdmin'
import '../../../../../src/index.css'

const initialState = {
    title: '',
    price: '',
    description: '',
    category: '',
    _id: ''
}

function CreateFood() {
    const state = useContext(GlobalState)
    const [food, setFood] = useState(initialState)
    const [categories] = state.categoriesAPI1.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    
    const history = useNavigate()
    const param = useParams()

    const [foods] = state.foodsAPI.foods
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.foodsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            foods.forEach(food => {
                if( food._id  === param.id) {
                    setFood(food)
                    setImages(food.images)
                }
            })
        }else{
            setOnEdit(false)
            setFood(initialState)
            setImages(false)
        }
    }, [param.id, foods])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
      
            const file = e.target.files[0]
            
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('http://localhost:8345/api/upload', formData, {
           
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
   
            setLoading(true)
            await axios.post('http://localhost:8345/api/destroy', {public_id: images.public_id}, {
   
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setFood({...food, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {

            if(!images) return alert("No Image Upload")

            if(onEdit){
                await axios.put(`http://localhost:8345/api/foods/${food._id}`, {...food, images}, {
               
                })
            }else{
                await axios.post('http://localhost:8345/api/foods', {...food, images}, {
               
                })
            }
            setCallback(!callback)
            history("/allfood")
        } catch (err) {
            alert(err.response.data.msg)
        
        
        
        
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div>
            <Navbar/>
        <div className="container1">
        
        <div className="row g-0">
            <div className="cl">
            <div className="card-body">
            <h4 className="card-title  mt-3">{onEdit? "Edit Food" : "Create Food"}</h4>
                                <hr classNameName="mb-3" />
            <form onSubmit={handleSubmit}>
               

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input placeholder="Title"  className='form-control' type="text" name="title" id="title" required
                    value={food.title} onChange={handleChangeInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input placeholder="Price"  className='form-control' type="number" name="price" id="price" required
                    value={food.price} onChange={handleChangeInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea placeholder="Description"  className='form-control' type="text" name="description" id="description" required
                    value={food.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="mb-3">
                <label for="other" className="form-label">Categories: </label>
                    <select class="form-control " name="category" value={food.category} onChange={handleChangeInput} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                
                <label for="other" className="form-label">Image</label> 
                <tr className='gap'></tr>   
                <div class="custom-file mb-3">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                <label class="custom-file-label" for="file_up">Add Image here</label>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} className="resturantImageadd" alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                                    </div>  
                                    
                <button type="submit" className='submitResturant'>{onEdit? "Update" : "Create"}</button>
                 
                    </form>
                </div>
            </div>
   
            </div>

                        
        </div>
        <div className='row'>
                <button type="button"  className="back"><Link className='link-o'to="/admin"><MdArrowBackIosNew style={{color: '#E8861E', fontSize: '20px'}}/>  Back</Link></button>
                <button type="button"  className="viewList"><Link className='link-o'to="/allfood">View List  <BsCardList style={{color: '#E8861E', fontSize: '20px'}}/></Link></button>
                </div>
                <tr className='gap'></tr>
        <Footer></Footer>
        </div>
    )
}

export default CreateFood




