import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
// import './AddDoctors.css'



const MedicineUpComming = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName

        data.adminEmail = user.email
        // data.schedules=''
        data.likes = []
        // data.status = 'Pending'
     

        fetch("http://localhost:5000/upMedicine", {
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
                            <h2 className='mb-5 text-Black'>Add Your UpComming Medicine</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("name", { required: true })} placeholder='Medicine Name' /> <br />

                              
                                 
                                 <input
                                 style={{fontWeight:"600",color:" #0E1621"}}
                                 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/>
                                 
                              
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("price", { required: true })} placeholder='price' /> <br />
                               
                               
                              
                                

                              
                              
                                
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

export default MedicineUpComming;