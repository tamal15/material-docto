import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../../../hooks/useAuth';

import './MedicinUpload.css'
const MedicinUpload = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName

        data.adminEmail = user.email
        data.likes = []
        // data.status = 'Pending'
     

        fetch("http://localhost:5000/postadminProduct", {
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
                        <div className="login-form text-center" style={{background:"#1f2833",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white '>Add Your Admin Products</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("productName", { required: true })} placeholder='Product Name' /> <br />

                                <input
                                type="number"
                                min="1"
                                onkeyup="if(this.value<0)this.value=1"
                                step="1"
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("ProductPrice", { required: true })} placeholder='Product Price' /> <br />
                                 
                                 <input
                                 style={{fontWeight:"600",color:" #0E1621"}}
                                 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/>
                                 
                                
                               


                                <br />
                               
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("description", { required: true })} placeholder='Description' /> 


<Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"104px",marginRight:"104px", borderRadius:"15px",color:"black"}}>
                                        
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            placeholder='select'
                                            {...register("categories")}
                                        >
                                            <option>Select categories</option>
                                            <option value="Medicin">Medicin</option>
                                            <option value="Equipment">Equipment</option>
                                            {/* <option value="Filmet 200">Filmet 200</option>
                                            <option value="Zeropain">Zeropain</option>
                                            <option value="Bopam">Bopam</option>
                                            <option value="Voltalin D">Voltalin D</option> */}
                                         
                                          
                                        </select>
                                    </Form.Group>

                               

                                {/* <input> */}
                                <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"104px",marginRight:"104px", borderRadius:"15px",color:"white"}}>
                                        <Form.Label>
                                          
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
                                
                                

                               

                               <div className='paterns'>
                              
                             <button className='submit-all ' type='submit'>Submit</button>
                               <div className='paterns'>

</div>
                               </div>

                              


                           
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default MedicinUpload;