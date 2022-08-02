import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit ,reset} = useForm();

    const onSubmit= (data) =>{
        console.log(data)
      
        axios.post('https://enigmatic-citadel-27942.herokuapp.com/user',data)
      .then(res=>{
        //   console.log(res)
           if(res.data.insertedId){
              alert('added successfully');
              reset()
          }
      })
        //  e.preventDefault()
    }
    return (
        <div className="submits">
           
            <h1>Add new Products</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
 <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
 <textarea {...register("description")} placeholder="description"/>
 <input type="number" {...register("price")} placeholder="price" />
 <input {...register("img")} placeholder="img url"/>
 <input className='sub' type="submit" />
</form>
       
   </div>
    );
};

export default AddProduct;