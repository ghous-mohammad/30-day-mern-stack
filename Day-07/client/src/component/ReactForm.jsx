/* eslint-disable no-unused-vars */
import axios from "axios"
import React from 'react'
import {useForm}  from "react-hook-form"

function ReactForm() {
  const {
    register , 
    handleSubmit , 
    formState: {errors , isSubmitting},
    reset,
    getValues


  } = useForm()

  let onsubmit  = async (data) => { 
      
    await axios.post( "http://localhost:5000/user" ,data ).then((res) => console.log(res+"success") )
    .catch(err => console.log(err))
    
   
    reset()
    }

  return (
    <>
     <h1> React Hook Form </h1>

      <form onSubmit={handleSubmit(onsubmit)} className='form-main' >
  <label htmlFor='FullName' >
    Name: 
    <input 
    {
        ...register("fullname", {
            required : "Full name is required"
        })

    }
    id='FullName' type='text' />
  </label>
  {
    errors.fullname && (
        <p style={{color:"red"}}>{errors.fullname.message}</p>
    )
  }



  <label htmlFor='email' >
    Email
    <input 
      {
        ...register("email", {
            required : "email is required"
        })

    }
    id='email' type='email' />
  </label>
  {errors.email && (
    <p style={{color:"red"}}>{errors.email.message}</p>
  )}
  
  <label htmlFor='password' >
   password 
    <input
      {
        ...register("password", {
            required : "password is required"
        })

    }
     id='password' type='password' />
  </label>
  {
    errors.password && (
        <p style={{color:"red"}}>{errors.password.message}</p>
    )
  }


  <label htmlFor='confirm-password' >
    Confirm Password
    <input 
      {
        ...register("confirmPassword", {
            required : "confirm password is required",
            validate : (val) =>    val === getValues("password") || "Password must match"
            
        })

    }
    id='confirm-password' type='password' />
  </label>
  {
    errors.confirmPassword && (
        <p style={{color:"red"}}>{errors.confirmPassword.message}</p>
    )
  }


  <input disabled={isSubmitting} type='submit' />   

      </form>
    </>
  )
}

export default ReactForm