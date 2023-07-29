import React, { Fragment, useState } from 'react';
import axios from 'axios';

function Registration(){
    const[name,setName] = useState("");
    const[phoneNo,setPhoneNo] = useState("");
    const[address,setAddress] = useState("");

    const handleNameChange = (value) => {
        setName(value);
    }

    const handlePhoneNoChange = (value) => {
        setPhoneNo(value);
    }

    const handleAddressChange = (value) => {
        setAddress(value);
    }

    const handleSave = () => {
        const data = {
            Name : name,
            phoneNo : phoneNo,
            city : address,
            IsActive : 1
        };

        const url = 'https://localhost:44330/api/Test/Registration';
        axios.post(url,data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert("error");
        })

    }

    return (
        <Fragment>

        <div>Registration</div>

        <label>NAME</label>
        <input type="text" id="txtName" placeholder='Enter Your Name' onChange={(e) => handleNameChange(e.target.value)}    /> <br></br>

        <label>Phone Number</label>
        <input type="text" id="txtPhoneNo" placeholder='Enter Your PhoneNO'  onChange={(e) => handlePhoneNoChange(e.target.value)} /> <br></br>

        <label>Address</label>
        <input type="text" id="txtAddress" placeholder='Enter Your City'  onChange={(e) => handleAddressChange(e.target.value)} /> <br></br>

        <button onClick={() => handleSave()}>Save</button>



        </Fragment>
    )
}

export default Registration;

