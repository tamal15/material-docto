import React, { useEffect } from 'react';
// import image1 from '../../../../images/developer.jpg'
// import image2 from '../../../../images/mern.png'
// import image3 from '../../../../images/designer.jpg'
import './Bonus.css'
// import Aos from 'aos';
// import 'aos/dist/aos.css';
const Bonus = () => {
  useEffect(() => {
    // Aos.init({
    //   duration: 1000,
    // });
  }, []);
    return (
        <div>
            <div className="container mb-5 p-3 mt-5">
                  {/* <h1  className="text-info mb-5 mt-5">Services</h1> */}
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid honeydew ",background:"honeydew"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img  style={{height:"260px",width:"430px"}} className="image-design" src="https://cdn.create.vista.com/downloads/b8685c29-43ce-4cb9-a9f8-1f7ac12a1869_1024.jpeg" class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid honeydew ",background:"honeydew"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{height:"260px",width:"430px"}} className="image-design" src="https://cdn.create.vista.com/downloads/d634825d-48cd-49a2-a172-c651391b64fa_1024.jpeg" class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid honeydew ",background:"honeydew"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{height:"260px",width:"430px"}}  className="image-design" src="https://cdn.create.vista.com/downloads/ca34ae73-b6ae-48b1-9a3d-4adfab411368_450.jpeg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 4rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid honeydew ",background:"honeydew"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{height:"260px",width:"430px"}}  className="image-design" src="https://cdn.create.vista.com/downloads/782ab839-9b04-41c2-8c6e-c7f36ded41fa_450.jpeg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 5th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid honeydew ",background:"honeydew"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{height:"260px",width:"430px"}}  className="image-design" src="https://cdn.create.vista.com/downloads/ed313327-c439-4d53-904e-c34062a103b9_1024.jpeg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 6th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid honeydew ",background:"honeydew"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{height:"260px",width:"430px"}}  className="image-design" src="https://cdn.create.vista.com/downloads/7c3ae5f1-0b25-475d-b907-056e5f2b810c_640.jpeg" class="card-img-top" alt="..." />


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Bonus;