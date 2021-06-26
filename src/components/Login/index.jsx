import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavbarContext } from "../../Context";
import Api from "../Axios/Api";

export default function Login() {

  const {Auth,setAuth} = useContext(NavbarContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) =>  {
    console.log(data)
    const response = await Api.post('/auth/login',data)
    console.log(response)
    setAuth(response)
    console.log(Auth)
  }

 

  return (
    
    <div className="col-md-8 offset-md-2">
        <h1 className="text-center">Login Form</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="form-control" defaultValue="Name" {...register("email", { required: true })} />
      <input className="form-control" defaultValue="Email" {...register("password", { required: true })} />
       
      
      <input type="submit" />
    </form>
    </div>
  );
}