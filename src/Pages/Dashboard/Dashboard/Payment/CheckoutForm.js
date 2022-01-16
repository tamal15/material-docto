import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState ,useEffect} from 'react';
import useAuth from '../../../../hooks/useAuth';
import './CheckoutForm.css'

const CheckoutForm = ({payment}) => {
  const {price,patientName, _id}=payment;
  const {user}=useAuth()
  const stripe=useStripe();
  const elements=useElements();

  const [error,setError]=useState('');
  const [sucess, setSucess] =useState('');
  const [process, setProcess]=useState(false);
  const [clientSecret, setClientSecret]=useState('');

  useEffect(()=>{
    fetch('https://enigmatic-citadel-27942.herokuapp.com/create-payment-intent',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify({price})
    })
    .then(res=>res.json())
    .then(data=>setClientSecret(data.clientSecret))
  },[price])

  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!stripe || !elements ){
      return;
    }

    const card = elements.getElement(CardElement)
    if(card == null){
      return;
    }
    setProcess(true);
    const {error , paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card
    });

    if(error){
      setError(error.message);
      setSucess('')
    }
    else{
      setError('');
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
      setError(intentError.message);
      setSucess('')
    }
    else{
      setError('');
      setSucess('your payment sucessFully.')
      console.log(paymentIntent);
      setProcess(false)
    }

      // save to database 
      const payment={
        amount:paymentIntent.amount,
        created:paymentIntent.created,
        last4:paymentMethod.card.last4,
        transaction:paymentIntent.client_secret.slice('_secret')[0]
      }
      fetch(`https://enigmatic-citadel-27942.herokuapp.com/appointments/${_id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(payment)
      })
      

    
    
  }
  return (
    <div>

      {/* form  */}
      <form onSubmit={handleSubmit} className='optioning'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: 'brown',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     {
       process ? <CircularProgress></CircularProgress> :  <button className='kash' type="submit" disabled={!stripe || sucess}>
       Pay ${price}
     </button>
     }
    </form>
    {
      error && <p style={{color:'red'}}>{error}</p>
    }
    {
      sucess && <p style={{color:'green'}}>{sucess}</p>
    }
    
      
    </div>
  );
};

export default CheckoutForm;