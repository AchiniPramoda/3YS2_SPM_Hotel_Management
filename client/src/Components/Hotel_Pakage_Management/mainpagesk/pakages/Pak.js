import React, {useState,useEffect, useContext,useRef} from 'react'
import { GlobalState } from '../../../../GlobalState'
import PakageItem2 from '../utils/pakageItem/P'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import {Link} from 'react-router-dom'

import LoadMore from './LoadMore'
import Header4 from '../../headersk/Header4'
import './pakages1.css';
import Footer from '../../headersk/Footer'
import { useReactToPrint } from "react-to-print";
function Pakages21() {
    const state = useContext(GlobalState)
    const [pakages, setPakages] = state.pakagesAPI.pakages
  
  
    const [callback, setCallback] = state.pakagesAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });











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
  
        
         <div className="delete-all">
     
                <button onClick={handlePrint} className="print__button1">  Print </button> 
            </div>
          
          

          
     









       <div class="print__section1">
<div class="container1">
  <div class="row1">
    <div class="col-md-121">

      <div ref={componentRef} className="card1">
        <div class="float__start1">
      
        </div>
        <hr />
        <div class="float__infoss1">
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
        </div>
      </div>
    </div>
  </div>
</div>
</div>











        <LoadMore />
        {pakages.length === 0 && <Loading />}
        <Footer></Footer></>
        
    )
  
}

export default Pakages21

