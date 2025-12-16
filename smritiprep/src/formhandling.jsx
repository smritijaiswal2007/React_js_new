import React, { useState } from 'react'

const formhandling = () => {
    return (
        let [myname,setmyname]=useState(""),
        let [myemail,setmyemail]=useState(""),
        let [mynumber,setmynumber]=useState("")


        let handleSubmit=(e)=>{

            e.preventDefault()

            alert(

                `
                myname=${myname}and
                my email is ${myemail}and 
                my number is ${mynumber}

                `
            )


        }

    <>
        <h1>Form Handling</h1>
            Enter Name : <input type="text" value={myname} onChange={(e)=>{setmyname(e.target.value)}}/>
            Enter Email : <input type="text" value={myemail} onChange={(e)=>{setmyemail(e.target.value)}}/>
            Enter Number : <input type="text" value={mynumber} onChange={(e)=>{setmynumber(e.target.value)}}/>


    </>
    )
}

export default formhandling
