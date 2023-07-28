import React from 'react';

const CartOrgan = ({ data }) => {


    const { name, email, organ,phone, address, year } = data

  
    return (
        <div className="col">
            <div className="card custom-cart h-100 shadow" style={{background:"honeydew",color:"black",border:"1px solid #182533"}}>
              
                <div className="card-body">
                    <h3 className="card-title fs-3">Name: {name}</h3>
                    {/* <h5 className="card-title"><b>Author:</b> {authorName}</h5> */}
                    <h3 className="card-title"><b>Email:</b> {email}</h3>
                    <h3 className="card-title"><b>Phone:</b> {phone}</h3>
                    <h3 className="card-title"><b>Address:</b> {address}</h3>
                    <h3 className="card-title"><b>Organ:</b> {organ}</h3>
                 
                    <div className="d-flex justify-content-between pt-3" >
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartOrgan;