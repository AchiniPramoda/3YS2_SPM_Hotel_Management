// import React, {useContext, useState, useEffect} from 'react'
// import {useParams, Link} from 'react-router-dom'
// import {GlobalState} from '../../../../GlobalState'
// import PakageItem from '../utils/pakageItem/PakageItem'
// import axios from 'axios'

// function DetailPakage() {
//     const params = useParams()
//     const state = useContext(GlobalState)
//     const [pakages] = state.pakagesAPI.pakages
//     const addCart = state.sellpackAPI.addCart
//     const [detailPakage, setDetailPakage] = useState([])


//     const [setUsers] = useState([]);
//     useEffect(() =>{
//         if(params.id){

//             pakages.forEach(pakage => {
//                 if(pakage._id === params.id) setDetailPakage(pakage)
//             })
//         }
//     },[params.id, pakages])
//     axios.get("http://localhost:5000/api/pakages").then((res) => {
//             console.log(res.data);
//             setUsers(res.data);
//         }).catch((err) => {
//             console.log(err);
//         })
//     if(detailPakage.length === 0) return null;



    



















//     return (
//         <>
//             <div className="detail">
//                 <img src={detailPakage.images.url} alt="" />
//                 <div className="box-detail">
//                     <div className="row">
//                         <h2>{detailPakage.title}</h2>
//                         <h6>#id: {detailPakage.pakage_id}</h6>
//                     </div>
//                     <span>LKR {detailPakage.price}</span>
//                     <p>{detailPakage.content}</p>
//                     <p>Sold: {detailPakage.sold}</p>
//                  <br></br>
              
//                     <div className="row_btn">
//                     <Link to="/cart" id='btn_buy' style={{ fontWeight:"bold"}}
//                     onClick={() => addCart(detailPakage)}>
//                         BOOK
//                     </Link>
//                     </div>
//                 </div>
           
// </div>
//             <div>
//             <h2 style={{textAlign: "center", fontSize: "2.3rem" ,  fontWeight:"bold"} } >Related pakages </h2>
//                 <div className="pakages">
                    
//                     {
//                         pakages.map(pakage => {
//                             return pakage.category === detailPakage.category 
//                                 ? <PakageItem key={pakage._id} pakage={pakage} /> : null
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// export default DetailPakage




import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import PakageItem from '../utils/pakageItem/PakageItem'
import axios from 'axios'

function DetailPakage() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [pakages] = state.pakagesAPI.pakages
    const addCart = state.sellpackAPI.addCart
    const [detailPakage, setDetailPakage] = useState([])


    const [setUsers] = useState([]);
    useEffect(() =>{
        if(params.id){

            pakages.forEach(pakage => {
                if(pakage._id === params.id) setDetailPakage(pakage)
            })
        }
    },[params.id, pakages])
    axios.get("http://localhost:5000/api/pakages").then((res) => {
            console.log(res.data);
            setUsers(res.data);
        }).catch((err) => {
            console.log(err);
        })
    if(detailPakage.length === 0) return null;



    



















    return (
        <>
            <div className="detail">
                <img src={detailPakage.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailPakage.title}</h2>
                        <h6>#id: {detailPakage.pakage_id}</h6>
                    </div>
                    <span>LKR {detailPakage.price}</span>
                    <p>{detailPakage.content}</p>
                    <p>Sold: {detailPakage.sold}</p>
                 <br></br>
              
                    <div className="row_btn">
                    <Link to="/cart" id='btn_buy' style={{ fontWeight:"bold"}}
                    onClick={() => addCart(detailPakage)}>
                        BOOK
                    </Link>
                    </div>
                </div>
           
</div>
            <div>
            <h2 style={{textAlign: "center", fontSize: "2.3rem" ,  fontWeight:"bold"} } >Related pakages </h2>
                <div className="pakages">
                    
                    {
                        pakages.map(pakage => {
                            return pakage.category === detailPakage.category 
                                ? <PakageItem key={pakage._id} pakage={pakage} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailPakage




