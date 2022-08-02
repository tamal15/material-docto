import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const AppoinrmentToken = () => {
    const {user}=useAuth()
    const [token,setToken]=useState([])

    useEffect(()=>{
        fetch('https://enigmatic-citadel-27942.herokuapp.com/init')
        .then(res=>res.json())
        .then(data=>{
            setToken(data)
        })
    },[])

    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <h1>token: {token.length}</h1>
            
            <div className='container'>
                <div className='row'>


                {
                        token?.map((offers)=>(
                            <div className="col-lg-6 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card" style={designShow}>
                                {/* <img className="image-design" src={offers?.img} class="card-img-top" alt="..." /> */}
                                <div class="card-body body-designs">
                                    <h3>{offers?.paymentStatus}</h3>
                                    <p class="card-text">{offers?.description}.</p>
                                    <h6 className="bg-danger text-white me-2 p-1 ">{offers?.status}</h6>
                                  
                                 
                                 
                                </div>
                    
                    
                            </div>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default AppoinrmentToken;