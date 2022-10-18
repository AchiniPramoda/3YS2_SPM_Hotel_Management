import React, {useState,useEffect,useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import PakageItem from '../utils/pakageItem/PakageItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'
import Header from '../../headersk/Header'
import Footer from '../../headersk/Footer'

function Pakages() {
    const state = useContext(GlobalState)
    const [pakages, setPakages] = state.pakagesAPI.pakages
 
    const [callback, setCallback] = state.pakagesAPI.callback
    const [loading, setLoading] = useState(false)
   


    const [users,setUsers] = useState([]);















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

           <Header />
      
      
       

        <div className="pakages">
            {
                pakages.map(pakage => {
                    return <PakageItem key={pakage._id} pakage={pakage}
                     deletePakage={deletePakage} handleCheck={handleCheck} />
                })
            } 
       
</div>     <Footer />
        <LoadMore />
        {pakages.length === 0 && <Loading />}
        </>
    
    )
}

export default Pakages


