import React ,{useState} from 'react'
import './foodItem.css'
import StripeCheckout from "react-stripe-checkout";
import { FormControl, InputAdornment, InputLabel, OutlinedInput  } from "@mui/material";

function FoodItem({food, deleteFood}) {
const [amount , setAmount] = useState(0);

const handleToken = (token) => {
    fetch("http://localhost:8345/payment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
    .then(res => res.json())
    .then(_ => {
      window.alert("Transaction Successful.");
    }).catch(_ => window.alert("Transaction Failed."))
  }

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

    return (
        <div className="food_card">
          
            <img src={food.images.url} alt="" />

            <div className="food_box">
                <h3 title={food.title}>{food.title}</h3>             
                <p>{food.description}</p>
                <span>LKR{food.price}</span>
                <div className='pay'>
               <div className='stripe-button-el'>
                <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
                    token={handleToken}
                    name=""
                    panelLabel={`Pay Now`}
                    currency ="LKR"
                    alert={amount *100}
                    ></StripeCheckout></div></div>
            </div>

        </div>
    )
    }



















export default FoodItem


