import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import './AddDoctors.css'
import useAuth from '../../../../hooks/useAuth';


const IcuSupport = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName

        data.adminEmail = user.email
        // data.schedules=''
        data.likes = []
        // data.status = 'Pending'
     

        fetch("http://localhost:5000/icuSupport", {
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
                            <h2 className='mb-5 text-Black'>Add Your Icu Support</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("HospitalName", { required: true })} placeholder='Hospital Name' /> <br />

                                <input
                                // type="number"
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("DriverName", { required: true })} placeholder='Driver Name' /> <br />
                                 
                                 <input
                                 style={{fontWeight:"600",color:" #0E1621"}}
                                 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/>
                                 
                                <input
                                type="number"
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("AmbulanceNumber", { required: true })} placeholder='Ambulance Number' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("ProductPrice", { required: true })} placeholder='price' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("seat", { required: true })} placeholder='seat' /> <br />
                               
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("AmbulanceDescription", { required: true })} placeholder='Ambulance Description' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("HospitalDescription", { required: true })} placeholder='Hospital Description' /> 

                              
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("division", { required: true })} placeholder='Division example : Dhaka' />
                                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("likes")} placeholder='likes' /> */}

                                {/* <input> */}
                               
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

export default IcuSupport;