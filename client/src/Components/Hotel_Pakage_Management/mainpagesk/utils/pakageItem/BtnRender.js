import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../../GlobalState'

function BtnRender({pakage}) {
    const state = useContext(GlobalState)
 
    const addCart = state.sellpackAPI.addCart

    
    return (
      
      
      
      
      
      
      
      
      
      
      
      
        <div className="card-footer mt-3">
        <div className="row_btn">
            {
             
                <><>
                   
                </><>
                <Link id="btn_buy2" to="#!" onClick={() => addCart(pakage)}>
                            BOOK
                        </Link>
                        <Link id="btn_view2" to={`/detail/${pakage._id}`}>
                            View
                        </Link>   
                    </></>
            }
            </div>    
        </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    )
}

export default BtnRender


