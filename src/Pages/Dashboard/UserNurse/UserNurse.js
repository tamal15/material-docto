import React from 'react';


const UserNurse = (props) => {

    
    const { name, address, hospitalName, userName, email, _id ,status,phone} = props.data
    
    // let googleId = driveLink?.slice(32, 65);
    // const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`


   


   

    return (
       <>
           <tr role="row" style={{ question: "2px solid gray",textAlign:"left" }} >
                            {/* <th scope="row">{index + 1}</th> */}
                            <td style={{fontWeight:600, color:"black"}}>{name}</td>
                            <td style={{fontWeight:600, color:"black"}}>{address}</td>
                            {/* <td>{year}</td> */}
                         

                            {/* <td>   <button  className="btn-style download-btn " ><a style={{textDecoration:"none"}} href={viewUrl} className="">See Syllabus</a></button>
                            </td>  */}
                            <td style={{fontWeight:600,color:"black"}}>{status}</td>
                            <td style={{fontWeight:600,color:"black"}}>{phone}</td>
                            <td style={{fontWeight:600,color:"black"}}>{hospitalName}</td>
                            <td style={{fontWeight:600,color:"black"}}>{email}</td>
                            <td> <button
                                className="btn-style download-btn"
                            onClick={() => props.handleDeletes(_id)}
                            >
                                Delete 
                            </button></td>
                        </tr>
       </>
    );
};

export default UserNurse;