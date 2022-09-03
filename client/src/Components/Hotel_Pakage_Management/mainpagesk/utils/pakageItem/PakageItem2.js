import React from 'react'
import BtnRender from './BtnRender2'

function PakageItem2({pakage, deletePakage, handleCheck}) {

    return (
        <div className="pakage_card">
            {
             <input type="checkbox" checked={pakage.checked}
                onChange={() => handleCheck(pakage._id)} />
            }
            <img src={pakage.images.url} alt="" />

            <div className="pakage_box">
                <h2 title={pakage.title}>{pakage.title}</h2>
                <span>${pakage.price}</span>
                <p>{pakage.description}</p>
            </div>

            
            <BtnRender pakage={pakage} deletePakage={deletePakage} />
        </div>
    )
}

export default PakageItem2


