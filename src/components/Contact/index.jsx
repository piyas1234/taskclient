import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));  

  return (
    
    <div className="col-md-8 offset-md-2">
        <h1 className="text-center">Contact Us</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="form-control" defaultValue="Name" {...register("name", { required: true })} />
      <input className="form-control" defaultValue="Email" {...register("email", { required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <textarea className="form-control" {...register("message", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </div>
  );
}