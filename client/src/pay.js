import { useState} from "react";
import StripeCheckout from "react-stripe-checkout";
//import { FormControl, InputAdornment, InputLabel, OutlinedInput  } from "@mui/material";
import "./App.css"

function Pay() {
  const [ amount] = useState(0);

  const handleToken = (token) => {
    fetch("/payment/donate", {
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

 
  
  return (
    
    <div className="App2" 
    style={{
       
       }}>
{/*           
    <FormControl sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={handleAmountChange}
            startAdornment={<InputAdornment position="start">LKR</InputAdornment>}
            label="Amount"
        />    
    </FormControl> */}
    <StripeCheckout
          stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
          token={handleToken}
          name=""
          panelLabel={`Pay Now`}
          currency="LKR"
          amount={amount * 100}
      >
         
      </StripeCheckout>
</div>




  );
}

export default Pay;