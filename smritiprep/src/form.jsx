import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";


const formVal = () => {

    let Navigate = useNavigate()
    let [form,setform]= useState({
        name:"",
        email:"",
        contact:""
    });
    let handleclick=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    let handlesubmit=(e)=>{
        e.preventDefault();//stops the form reloading
        console.log("Data",form);

        let valid = true

        if(form.name.trim()===""){
            alert("Name is required");
            return;
        }
        else if (form.contact.length>10){
            alert("Contact Must be graeter than 10")
        }

        if(valid){
            alert("form submitted successfully")
            localStorage.setItem("Name" , form.name)
            localStorage.setItem("Email" , form.email)
            localStorage.setItem("Contact" , form.contact)

            Navigate('/login')
            valid= false

        }
    }
    
    return (
    <>
    <h1>Hello..</h1>
    <form onSubmit={handlesubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text"  name="name" onChange={handleclick}  />

        <br /> <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleclick} /> <br />

        Contact : <input type="number" name='contact' onChange={handleclick} /> <br />

        <input type="submit" />
    </form>
    </>
    )
}

export default formVal