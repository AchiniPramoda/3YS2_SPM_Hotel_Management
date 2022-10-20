import React from 'react'
import {Link} from 'react-router-dom'
import { MdEdit ,MdDelete} from "react-icons/md";

function BtnRender2({food, deleteFood}) {
   
    
    return (

        <div className="card-footer mt-3">
        <div className="row_btn">
            {
             
                <><>
                <button  className="actions" type="button"  ><Link  to="#!"
                        onClick={() => deleteFood(food._id, food.images.public_id)}>
                        <MdDelete style={{color: '#F07D7D', fontSize: '20px'}}/>
                    </Link></button>
                    <button  className="actions" type="button"  ><Link  to={`/edit_food/${food._id}`}>
                    <MdEdit style={{color: '#126910', fontSize: '20px'}}/>
                    </Link></button>
                    
                </><>
                        
                    </></>
            }
            </div>    
        </div>
    )
}

export default BtnRender2


