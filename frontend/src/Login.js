import React, { Fragment, useState } from 'react';
import axios from 'axios';

function Login(){

    const[name,setName] = useState("");
    const[phoneNo,setPhoneNo] = useState("");

    const handleNameChange = (value) => {
        setName(value);
    }

    const handlePhoneNoChange = (value) => {
        setPhoneNo(value);
    }

    const handleLogin = () => {
        const data = {
            Name : name,
            phoneNo : phoneNo,
        };

        const url = 'https://localhost:44330/api/Test/Login';
        axios.post(url,data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert("error");
        })

    }


    return (
       <Fragment>
        <label>NAME</label>
        <input type="text" id="txtName" placeholder='Enter Your Name' onChange={(e) => handleNameChange(e.target.value)}    /> <br></br>

        <label>Phone Number</label>
        <input type="text" id="txtPhoneNo" placeholder='Enter Your PhoneNO'  onChange={(e) => handlePhoneNoChange(e.target.value)} /> <br></br>

        <button onClick={() => handleLogin()}>Save</button>
       </Fragment>
    )
}

export default Login;