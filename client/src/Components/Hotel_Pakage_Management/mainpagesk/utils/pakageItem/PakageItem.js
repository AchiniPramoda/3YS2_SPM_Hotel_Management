import React from 'react'
import BtnRender from './BtnRender'

function PakageItem({pakage, deletePakage}) {

    return (
        <div className="pakage_card">
          
            <img src={pakage.images.url} alt="" />

            <div className="pakage_box">
                <h2 title={pakage.title}>{pakage.title}</h2>
                <span>LKR{pakage.price}</span>
                <p>{pakage.description}</p>
            </div>

            
            <BtnRender pakage={pakage} deletePakage={deletePakage} />
        </div>
    )
}



















export default PakageItem


