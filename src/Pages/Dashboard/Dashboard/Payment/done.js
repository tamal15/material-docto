import { CardElement ,useStripe,useElements} from '@stripe/react-stripe-js';
import React, { useState,useEffect } from 'react';
// import {  CircularProgress } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const CheckoutForm = ({payment}) => {
  const {price,patientName,_id}=payment
  const {user}=useAuth()
  const stripe=useStripe()
  const elements=useElements()
  const [error,setError]=useState('')
  const [clientSecret,setClientSecret]=useState('')
  const [success,setSuccess]=useState('')
  const [processing,setProcessing]=useState(false)

  useEffect(()=>{
   fetch('http://localhost:5000/create-payment-intent',{
     method:'POST',
     headers:{
       'content-type':'application/json'
     },
     body:JSON.stringify({price})
   })
   .then(res=>res.json())
   .then(data=>setClientSecret(data.clientSecret))
  },[price])

    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(!stripe || !elements){
        return;
      }
      const card = elements.getElement(CardElement)
      if(card===null){
        return;
      }
     
      setProcessing(true)

      const {error, paymentMethod}=await stripe.createPaymentMethod({
        type:'card',
        card
      })

      if(error){
        setError(error.message)
        setSuccess('')
      }
      else{
        setError('')
        console.log(paymentMethod)
      }

      // payment intent 
      const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: patientName,
              email:user.email
            },
          },
        },
      );
      if(intentError){
        setError(intentError.message)
        setSuccess('')
      }
      else{
        setError('')
        setSuccess('your payment successfully')
     
        console.log(paymentIntent)
        setProcessing(false)

        // save to database 
        const payment={
          amount:paymentIntent.amount,
          created:paymentIntent.created,
          last4:paymentMethod.card.last4,
          transaction:paymentIntent.client_secret.slice('_secret')[0]
        }
        fetch(`http://localhost:5000/appointments/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(payment)
        })

      }
       
    }
    return (
        <div>

<form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     
    
     {
       processing ? <CircularProgress/> :   <button type="submit" disabled={!stripe}>
       Pay ${price}
     </button>
     }
     
    </form>

    {
      error && <p style={{color:'red'}}>{error}</p>
    }
    {
      success && <p style={{color:'green'}}>{success}</p>
    }
            
        </div>
    );
};

export default CheckoutForm;