import React from 'react'


function PakageItem2({pakage, deletePakage, handleCheck}) {

    return (
        <div className="pakage_card">
           
               <img src={pakage.images.url} alt="" />

            <div className="pakage_box">
                <h2 title={pakage.title}>{pakage.title}</h2>   
                <p>{pakage.description}</p>
                <span>LKR{pakage.price}</span>
            </div>

            

        </div>
    )
}

export default PakageItem2


