import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import useAuth from '../../../../hooks/useAuth';
import './Payment.css'

const stripePromise = loadStripe('pk_test_51Jws3sCh1G1UyQbtGIKQCOcACx4YEYkPg7xatObbCXlLZSP7XqjwBTHEFCB34b39z2jTu2Y9kc2MGb8LWYZkhNIn00v5X8Qly2')
const Payment = () => {
    const{appointmentId}=useParams()
    const [payment,setPayment]=useState({})
    const {user} = useAuth();
    const {price,patientName,serViceName}=payment;

    useEffect(()=>{
       fetch(`http://localhost:5000/appointments/${appointmentId}`)
       .then(res=>res.json())
       .then(data=>setPayment(data))
    },[appointmentId])

    const purchage =()=>{
     const order={
        cus_name:patientName,
        cus_email:user.email,
        product_name:serViceName,
        total_amount:price

     }
      console.log(order);
      fetch(`http://localhost:5000/init`, {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>{
        window.location.replace(data)
      })
    }

    return (
        <div>
           <div className='bank'>
           <h2>Please Payment: <span className='nogod'>{patientName}</span></h2>
          <h2>  Price: $<span className='nogod'>{payment.price}</span></h2>
          <h3>Payment <span className='nogod'>Card</span> System</h3>

        {
            payment?.price &&
            <Elements stripe={stripePromise}>
            <CheckoutForm
            payment={payment}
            />
          </Elements>
        }
           </div>


        {/* bkash  */}
        {/* <div className='mobiles'>
          <h2>Payment For <span className='nogod'>Mobile</span> Banking: <span className='nogod'>Nogod</span> <span className='nogod'>Bikash</span> <span className='nogod'>Rocket</span></h2>
          <button onClick={purchage} className="kash">Pay Bikash</button>
        </div> */}
       




        </div>
    );
};

export default Payment;



/*
1. install stripe and strip react
2. set publisher key
3. Elements
4. checkout form

5. create payment method
6. server create payment intent api
7. load client secret
8. confirmcard payment
9. handle user error



*/