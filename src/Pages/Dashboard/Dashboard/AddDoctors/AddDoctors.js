import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddDoctors.css'
// import Header from '../../../Shared/Header/Header';
// import {  Form,Col} from "react-bootstrap";
import useAuth from '../../../../hooks/useAuth';

// import useFirebase from '../../../hooks/useFirebase';
// import Swal from 'sweetalert/sweetalert';

const AddDoctors = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName

        data.adminEmail = user.email
        // data.schedules=''
        data.likes = []
        // data.status = 'Pending'
     

        fetch("http://localhost:5000/postdoctor", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                    alert('added successfully');
                    reset()
                }
                
            });
    };

   
    return (
        <div className='py-5'>
            
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"honeydew",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Add Your Doctors</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("DoctorName", { required: true })} placeholder='Doctors Name' /> <br />

                                <input
                                // type="number"
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("time", { required: true })} placeholder='Time example: 8.00 AM-9.00 AM' /> <br />
                                 
                                 <input
                                 style={{fontWeight:"600",color:" #0E1621"}}
                                 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/>
                                 
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("space", { required: true })} placeholder='Space example :  8 ' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("price", { required: true })} placeholder='price' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("Address", { required: true })} placeholder='Address example : Hospital Name' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("shop", { required: true })} placeholder='Degree' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("description", { required: true })} placeholder='Description' /> 

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("specialist", { required: true })} placeholder='example : TeethOrthodonics' />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("division", { required: true })} placeholder='Division example : Dhaka' />
                                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("likes")} placeholder='likes' /> */}

                                {/* <input> */}
                                <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"84px",marginRight:"84px", borderRadius:"15px",color:"white"}}>
                                        <Form.Label>
                                            Give Us A Rating (1 is the wrost , 5 is the best)
                                        </Form.Label>
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            {...register("rating")}
                                        >
                                            <option>Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Form.Group>
                                {/* </input> */}
                                    <br></br>
                                
                                

                               

                                <button className='submit-all' type='submit'>Submit</button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default AddDoctors;