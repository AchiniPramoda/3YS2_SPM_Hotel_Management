import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../../GlobalState'

function BtnRender({pakage}) {
    const state = useContext(GlobalState)
 
    const addCart = state.sellpackAPI.addCart

    
    return (
        <div className="row_btn">
            {
             
                <><>
                 
                 
                </><>
                        <Link id="btn_buy" to="#!" onClick={() => addCart(pakage)}>
                            Buy
                        </Link>
                        <Link id="btn_view" to={`/detail/${pakage._id}`}>
                            View
                        </Link>
                    </></>
            }
                
        </div>
    )
}

export default BtnRender


