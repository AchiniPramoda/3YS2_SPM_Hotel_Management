import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../../GlobalState'

function BtnRender({food}) {
    const state = useContext(GlobalState)
 
    const addCart = state.sellpackAPI.addCart

    
    return (
        <div className="row_btn">
            {
             
                <><>
                 
                 
                </><>
                        <Link id="btn_buy" to="#!" onClick={() => addCart(food)}>
                            BOOK
                        </Link>
                        <Link id="btn_view" to={`/detail/${food._id}`}>
                            View
                        </Link>
                    </></>
            }
                
        </div>
    )
}

export default BtnRender


