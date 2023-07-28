import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import useAuth from '../../../../hooks/useAuth';
import useAuth from '../../../hooks/useAuth'
import Header from '../../Home/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const AmbulancePartUpload = () => {
    const { user } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName

        data.buyerEmail = user.email
      
        // data.status = 'Pending'
     
        fetch(`http://localhost:5000/services`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
               
                if(result.modifiedCount){
                    console.log(result)
                   alert("Confarom Profile Update")
                        reset()
                }
                // 
            });
    };

   
    return (
      <div>
        <Header></Header>


        <div className='py-5'>
            
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#032831",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Add Your Ambulance</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("id", { required: true })} placeholder='id' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("driver", { required: true })} placeholder='DriverName' /> <br />
                               
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("ProductPrice", { required: true })} placeholder=' Price' /> <br />
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("contact", { required: true })} placeholder=' Contact Number' /> <br />

                               
                                 
                                 <input
                                 style={{fontWeight:"600",color:" #0E1621"}}
                                 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/>
                                
                               
                               
                               
                               
                                <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("description", { required: true })} placeholder='Description' /> 

                            

<Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"104px",marginRight:"104px", borderRadius:"15px",color:"black"}}>
                                        
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            placeholder='select'
                                            {...register("division")}
                                        >
                                           <option>Select Division</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Chattogram">Chattogram</option>
                                            
                                           
                                          
                                        </select>
                                    </Form.Group>

                                    <br></br>

                                    <Form.Group as={Col} controlId="formGridRating"        style={{marginLeft:"104px",marginRight:"104px", borderRadius:"15px",color:"black"}}>
                                        
                                        <select
                                        style={{borderRadius:"30px"}}
                                            required
                                            className="form-control shadow-none"
                                            placeholder='select'
                                            {...register("branch")}
                                        >
                                           <option>Select Branch</option>
                                            <option value="Dhanmondi">Dhanmondi</option>
                                            <option value="Mirpur">Mirpur</option>
                                            <option value="Rangamati">Rangamati</option>
                                            
                                           
                                          
                                        </select>
                                    </Form.Group>
                              
                              
                             

                                
                              
                            

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


        <Footer></Footer>
      </div>
    );
};

export default AmbulancePartUpload;