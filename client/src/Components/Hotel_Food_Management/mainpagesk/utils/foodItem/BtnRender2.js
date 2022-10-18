import React from 'react'
import {Link} from 'react-router-dom'

function BtnRender2({food, deleteFood}) {
   
    
    return (

        <div className="card-footer mt-3">
        <div className="row_btn">
            {
             
                <><>
                    <Link id="btn_buy1" to="#!"
                        onClick={() => deleteFood(food._id, food.images.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view1" to={`/edit_food/${food._id}`}>
                        Edit
                    </Link>
                </><>
                        
                    </></>
            }
            </div>    
        </div>
    )
}

export default BtnRender2


