

import React, {useState, useContext,useRef} from 'react'
import {GlobalState} from '../../../../GlobalState'
import PakageItem2 from '../utils/pakageItem/PakageItem2'
import Loading from '../utils/loading/Loading'
import axios from 'axios'


import LoadMore from './LoadMore'
import Header4 from '../../headersk/Header4'
import './pakages1.css';
import Footer from '../../headersk/Footer'

function Pakages2() {
    const state = useContext(GlobalState)
    const [pakages, setPakages] = state.pakagesAPI.pakages
  
  
    const [callback, setCallback] = state.pakagesAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)


    const componentRef = useRef();
    
    const handleCheck = (id) =>{
        pakages.forEach(pakage => {
            if(pakage._id === id) pakage.checked = !pakage.checked
        })
        setPakages([...pakages])
    }

    const deletePakage = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
          
            })
            const deletePakage = axios.delete(`/api/pakages/${id}`, {
           
            })

            await destroyImg
            await deletePakage
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

   
    const checkAll = () =>{
        pakages.forEach(pakage => {
            pakage.checked = !isCheck
        })
        setPakages([...pakages])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        pakages.forEach(pakage => {
            if(pakage.checked) deletePakage(pakage._id, pakage.images.public_id)
        })
    }
 

    if(loading) return <div><Loading /></div>
    return (
        <>
         <Header4></Header4>
         <div className="delete-all1">
                

            </div>
         <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            
            </div>
          
          

          
            <div className="delete-all2">
                
            </div>










 




    
      
    
      
          <ul>
            





          <div className="pakages">
      

        
      {
          pakages.map(pakage => {
              return <PakageItem2 key={pakage._id} pakage={pakage}
             deletePakage={deletePakage} handleCheck={handleCheck} />
          })
      } 

 </div>















          </ul>
      
   
 













        <LoadMore />
        {pakages.length === 0 && <Loading />}
        <Footer></Footer></>
        
    )
  
}

export default Pakages2

