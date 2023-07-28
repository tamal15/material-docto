import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import Footer from '../../Shared/Footer/Footer';

import CartNurse from './CartNurse';


const ShowNurse = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getNurse')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)



    const managePost = books?.filter(models => models?.status === 'approved' || models.role==='admin');
    console.log(books)
    console.log(managePost)



    return (
        <div style={{background:""}}>
            <Header></Header>

<div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question text-bold text-black" style={{fontWeight:"700"}}>Nurse <span style={{color:"#46AADC"}}>Collection</span></h1></div>
            {
                books.length === 0 ?
                    <div className=" justify-content-center w-100 d-flex">
                        {/* <img src={spinner} alt="" /> */}
                    </div>
                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {managePost?.map((book) => (

                            <CartNurse
                                key={book.id}
                                data={book}>

                            </CartNurse>

                        ))}
                    </div>
            }

        </div>
        <Footer></Footer>

        </div>
      
    );
};

export default ShowNurse;