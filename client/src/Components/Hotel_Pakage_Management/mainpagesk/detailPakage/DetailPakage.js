import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import PakageItem from '../utils/pakageItem/PakageItem'

function DetailPakage() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [pakages] = state.pakagesAPI.pakages
    const addCart = state.sellpackAPI.addCart
    const [detailPakage, setDetailPakage] = useState([])

    useEffect(() =>{
        if(params.id){

            pakages.forEach(pakage => {
                if(pakage._id === params.id) setDetailPakage(pakage)
            })
        }
    },[params.id, pakages])

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
                    <p>{detailPakage.description}</p>
                    <p>{detailPakage.content}</p>
                    <p>Sold: {detailPakage.sold}</p>
                    <Link to="/cart" className="cart"
                    onClick={() => addCart(detailPakage)}>
                        BOOK
                    </Link>
                </div>
            </div>

            <div>
                <h2>Related pakages</h2>
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




