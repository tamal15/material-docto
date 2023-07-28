import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './AddOrgan.css'
// import useAuth from '../../../hooks/useAuth';
const AddOrgan = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName
        data.email = user.email
        data.status = 'Pending'
     

        fetch("http://localhost:5000/newOrgan", {
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
                // Swal.fire(
                //     'Question Posted Successfully.',
                // )
                
            });
    };
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#182533",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Add Your Organ</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("name", { required: true })} placeholder='Enter Name' /> <br />
                                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("hospitalName", { required: true })} placeholder='Hospital Name' /> <br /> */}
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("address", { required: true })} placeholder='address' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("phone", { required: true })} placeholder='phone' /> <br />

                                <select 
                                className='organs'
                                style={{fontWeight:"600",color:"", }}
                                {...register("organ")}>
                                <option value="">Organ</option>
                                    <option value="Heart">Heart</option>
                                    <option value="Lungs">Lungs</option>
                                    <option value="Liver">Liver</option>
                                    <option value="Kidneys">Kidneys</option>
                                    <option value="Pancreas ">Pancreas </option>
                                </select>
                                <br></br>
                                <br></br>

                                

                              
                               

                                <button className='submit-all' type='submit' >Submit</button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default AddOrgan;