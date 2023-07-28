import React from 'react';

const CartIcu = ({ data }) => {


    const { patientName, email, DriverName,phone, status, HospitalName ,AmbulanceNumber,
        Address   } = data

  
    return (
        <div className="col">
            <div className="card custom-cart h-100 shadow" style={{background:"#182533",color:"white",border:"1px solid #182533"}}>
              
                <div className="card-body">
                    <h3 className="card-title fs-3">patientName: {patientName}</h3>
                    {/* <h5 className="card-title"><b>Author:</b> {authorName}</h5> */}
                    <h3 className="card-title"><b>Email:</b> {email}</h3>
                    <h3 className="card-title"><b>Phone:</b> {phone}</h3>
                    <h3 className="card-title"><b>HospitalName:</b> {HospitalName}</h3>
                    <h3 className="card-title"><b>DriverName:</b> {DriverName}</h3>
                    <h3 className="card-title"><b>AmbulanceNumber:</b> {AmbulanceNumber}</h3>
                    <h3 className="card-title"><b>Address:</b> {Address}</h3>
                    <h3 className="card-title"><b>status:</b> {status}</h3>
                 
                    <div className="d-flex justify-content-between pt-3" >
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartIcu;