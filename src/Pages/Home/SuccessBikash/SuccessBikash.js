import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import swal from 'sweetalert';
import { Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import './SuccessBikash.css'

const SuccessBikash = () => {
    const { id } = useParams()
    console.log(id)
    let history = useHistory();
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://enigmatic-citadel-27942.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [id])

    const valid = () => {
        console.log('valid')
        const datas = {
            tran_id: id,
            val_id: product?.val_id
        }
        axios.post(`https://enigmatic-citadel-27942.herokuapp.com/validate`, datas)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    // alert('Thank you. your payment successfully');
                    swal("Good job!", "Your payment successfully !", "success");
                    history.push('/')
                }
            })
        // fetch(`https://enigmatic-citadel-27942.herokuapp.com/validate`,{
        //     method:'POST',
        //     headers:{
        //         'content-type':'application.json'
        //     },
        //     body:JSON.stringify(datas)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
    }


    return (
        <div>
            <h1>You have <span className='ment'>payment</span>  paid for</h1>

            <div>

                {/* start  */}

              <Container>
              {/* <Grid item xs={2} sm={4} md={4}> */}
                    <Card className="allow" sx={{ minWidth: 275, border: 0, boxShadow: 0, background: "rgb(66, 78, 78)", color:"white" }}>


                        <CardContent>

                            {/* <Typography variant="h5">
           {country.Active}
        </Typography>
         */}
                            <h1>Customer Name: {product?.cus_name}</h1>
                           
                <h3>Customer Email: {product?.cus_email}</h3>
                <h4>Service Name: {product?.product_name}</h4>
                {/* <h1>{product?.cus_name}</h1> */}
                <h4>Total Amount: {product?.total_amount}</h4>
                
                <button onClick={valid} className='but'> Payment Confirm </button>

                        </CardContent>
                        <CardActions>
                       

                        </CardActions>
                    </Card>

                {/* </Grid> */}



              </Container>

                {/* end  */}
                
            </div>
        </div>
    );
};

export default SuccessBikash;