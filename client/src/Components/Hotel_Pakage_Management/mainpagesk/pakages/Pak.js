import React, {useState,useContext,useRef} from 'react'
import { GlobalState } from '../../../../GlobalState'
import PakageItem2 from '../utils/pakageItem/P'
import Loading from '../utils/loading/Loading'
import axios from 'axios'

import LoadMore from './LoadMore'

import './pakages1.css';
import Footer from '../../headersk/Footer'
import { useReactToPrint } from "react-to-print";
function Pakages21() {
    const state = useContext(GlobalState)
    const [pakages, setPakages] = state.pakagesAPI.pakages
  
  
    const [callback, setCallback] = state.pakagesAPI.callback
    const [loading, setLoading] = useState(false)
    


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

   
 


 

    if(loading) return <div><Loading /></div>
    return (
        <>
  
        
         <div className="delete-all">
     
                <button onClick={handlePrint} className="print__button1" style={{color:"#fff"}}>  Print Report</button> 
            </div>
          
          

          
     












      <div ref={componentRef} className="">
    
        <hr />
      
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
 












        <LoadMore />
        {pakages.length === 0 && <Loading />}
        <Footer></Footer></>
        
    )
  
}

export default Pakages21

