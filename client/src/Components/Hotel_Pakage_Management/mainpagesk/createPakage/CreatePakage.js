// import React, {useState, useContext, useEffect} from 'react'
// import axios from 'axios'
// import {GlobalState} from '../../../../GlobalState'
// import Loading from '../utils/loading/Loading'
// import { useNavigate,useParams} from 'react-router-dom'
// import Header3 from '../../headersk/Header3'
// import Footer from '../../headersk/Footer'
// import '../createPakage/createPakage.css'



// const initialState = {
//     pakage_id: '',
//     title: '',
//     price: '',
//     description: '',
//     content: '',
//     category: '',
//     _id: '',
//     isGen: false
// }

// function CreatePakage() {
//     const state = useContext(GlobalState)
//     const [pakage, setPakage] = useState(initialState)
//     const [categories] = state.categoriesAPI.categories
//     const [images, setImages] = useState(false)
//     const [loading, setLoading] = useState(false)



//     const history = useNavigate()
//     const param = useParams()

//     const [pakages] = state.pakagesAPI.pakages
//     const [onEdit, setOnEdit] = useState(false)
//     const [callback, setCallback] = state.pakagesAPI.callback

//     useEffect(() => {
//         if(param.id){
//             setOnEdit(true)
//             pakages.forEach(pakage => {
//                 if(pakage._id === param.id) {
//                     setPakage(pakage)
//                     setImages(pakage.images)
//                 }
//             })
//         }else{
//             setOnEdit(false)
//             setPakage(initialState)
//             setImages(false)
//         }
//     }, [param.id, pakages])

//     const handleUpload = async e =>{
//         e.preventDefault()
//         try {
      
//             const file = e.target.files[0]
            
//             if(!file) return alert("File not exist.")

//             if(file.size > 1024 * 1024) // 1mb
//                 return alert("Size too large!")

//             if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
//                 return alert("File format is incorrect.")

//             let formData = new FormData()
//             formData.append('file', file)

//             setLoading(true)
//             const res = await axios.post('/api/upload', formData, {
           
//             })
//             setLoading(false)
//             setImages(res.data)

//         } catch (err) {
//             alert(err.response.data.msg)
//         }
//     }

//     const handleDestroy = async () => {
//         try {
   
//             setLoading(true)
//             await axios.post('/api/destroy', {public_id: images.public_id}, {
   
//             })
//             setLoading(false)
//             setImages(false)
//         } catch (err) {
//             alert(err.response.data.msg)
//         }
//     }

//     const handleChangeInput = e =>{
//         const {name, value} = e.target
//         setPakage({...pakage, [name]:value})
//     }

//     const handleSubmit = async e =>{
//         e.preventDefault()
//         try {

//             if(!images) return alert("No Image Upload")

//             if(onEdit){
//                 await axios.put(`/api/pakages/${pakage._id}`, {...pakage, images}, {
               
//                 })
//             }else{
//                 await axios.post('/api/pakages', {...pakage, images}, {
               
//                 })
//             }
//             setCallback(!callback)
//             history("/adminpro")
//         } catch (err) {
//             alert(err.response.data.msg)
        
        
        
        
//         }
//     }

//     const styleUpload = {
//         display: images ? "block" : "none"
//     }
//     return (
//       <div className='kavi'><Header3></Header3>
//        <div className="upload1">
//        <h3 style={{marginLeft:"100px"}}>{onEdit? "Update Package" : "Create package"}</h3>

//             </div> 
//         <div className="create_pakage">

     

//             <div className="upload">
//                 <input type="file" name="file" id="file_up" onChange={handleUpload}/>
//                 {
//                     loading ? <div id="file_img"><Loading /></div>

//                     :<div id="file_img" style={styleUpload}>
//                         <img src={images ? images.url : ''} alt=""/>
//                         <span onClick={handleDestroy}>X</span>
//                     </div>
//                 }
                
//             </div>               


//             <form onSubmit={handleSubmit}>
               
//                 <div className="row">
//                     <label htmlFor="pakage_id">Package ID</label>
//                     <input placeholder="Package ID"  className='form-control' type="text" name="pakage_id" id="pakage_id" required
//                     value={pakage.pakage_id} onChange={handleChangeInput} disabled={onEdit} />
//                 </div>

//                 <div className="row">
//                     <label htmlFor="title">Title</label>
//                     <input placeholder="Title"  className='form-control' type="text" name="title" id="title" required
//                     value={pakage.title} onChange={handleChangeInput} />
//                 </div>

//                 <div className="row">
//                     <label htmlFor="price">Price</label>
//                     <input placeholder="Price"  className='form-control' type="number" name="price" id="price" required
//                     value={pakage.price} onChange={handleChangeInput} />
//                 </div>

//                 <div className="row">
//                     <label htmlFor="description">Description</label>
//                     <textarea placeholder="Description"  className='form-control' type="text" name="description" id="description" required
//                     value={pakage.description} rows="5" onChange={handleChangeInput} />
//                 </div>

//                 <div className="row">
//                     <label htmlFor="content">Content</label>
//                     <textarea placeholder="Content"  className='form-control' type="text" name="content" id="content" required
//                     value={pakage.content} rows="7" onChange={handleChangeInput} />
//                 </div>

//                 <div className="row">
//                     <label htmlFor="categories">Categories: </label>
//                     <select class="form-control " name="category" value={pakage.category} onChange={handleChangeInput} >
//                         <option value="">Please select a category</option>
//                         {
//                             categories.map(category => (
//                                 <option value={category._id} key={category._id}>
//                                     {category.name}
//                                 </option>
//                             ))
//                         }
//                     </select>
//                 </div>
                
//                 <button type="submit">{onEdit? "Update" : "Create"}</button>

//             </form>
   
//             </div>
//             <Footer></Footer>
//         </div>
//     )
// }

// export default CreatePakage




import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useNavigate,useParams} from 'react-router-dom'
import Header3 from '../../headersk/Header3'
import Footer from '../../headersk/Footer'
import '../createPakage/createPakage.css'



const initialState = {
    pakage_id: '',
    title: '',
    price: '',
    description: '',
    content: '',
    category: '',
    _id: '',
    isGen: false
}

function CreatePakage() {
    const state = useContext(GlobalState)
    const [pakage, setPakage] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)



    const history = useNavigate()
    const param = useParams()

    const [pakages] = state.pakagesAPI.pakages
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.pakagesAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            pakages.forEach(pakage => {
                if(pakage._id === param.id) {
                    setPakage(pakage)
                    setImages(pakage.images)
                }
            })
        }else{
            setOnEdit(false)
            setPakage(initialState)
            setImages(false)
        }
    }, [param.id, pakages])

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
            const res = await axios.post('/api/upload', formData, {
           
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
            await axios.post('/api/destroy', {public_id: images.public_id}, {
   
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setPakage({...pakage, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {

            if(!images) return alert("No Image Upload")

            if(onEdit){
                await axios.put(`/api/pakages/${pakage._id}`, {...pakage, images}, {
               
                })
            }else{
                await axios.post('/api/pakages', {...pakage, images}, {
               
                })
            }
            setCallback(!callback)
            history("/adminpro")
        } catch (err) {
            alert(err.response.data.msg)
        
        
        
        
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
      <div className='kavi'><Header3></Header3>
       <div className="upload1">
       <h3 style={{marginLeft:"100px"}}>{onEdit? "Update Package" : "Create package"}</h3>

            </div> 
        <div className="create_pakage">

     

            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>               


            <form onSubmit={handleSubmit}>
               
                <div className="row">
                    <label htmlFor="pakage_id">Package ID</label>
                    <input placeholder="Package ID"  className='form-control' type="text" name="pakage_id" id="pakage_id" required
                    value={pakage.pakage_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input placeholder="Title"  className='form-control' type="text" name="title" id="title" required
                    value={pakage.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input placeholder="Price"  className='form-control' type="number" name="price" id="price" required
                    value={pakage.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea placeholder="Description"  className='form-control' type="text" name="description" id="description" required
                    value={pakage.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea placeholder="Content"  className='form-control' type="text" name="content" id="content" required
                    value={pakage.content} rows="7" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select class="form-control " name="category" value={pakage.category} onChange={handleChangeInput} >
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
                
                <button type="submit">{onEdit? "Update" : "Create"}</button>

            </form>
   
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CreatePakage




