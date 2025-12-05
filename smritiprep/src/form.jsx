import React, { useState } from 'react'


const formVal = () => {
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
        e.preventDefault();
        console.log("Data",form);
        if(form.name.trim()===""){
            alert("Name is required");
            return;
        }
        else if (form.contact.length>10){
            alert("Contact Must be graeter than 10")
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