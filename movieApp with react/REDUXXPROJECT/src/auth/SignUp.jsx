import React, { useState } from "react";
import style from "../styles/SignUp.module.css";
import CustomButton from "../reuseables/CustomButton";
import {Link, useNavigate} from "react-router-dom";




const SignUp = () => {



    const userDetails = {

        userName : "",
        email : "",
        password: "",
    };

    const [data, setData] = useState(userDetails)

    function handleChange(event) {
        const {name, value} = event.target
        setData((prevData) => {
            return {...prevData, [name]: value}

        })

       // setData ((prevData) => ({...prevData,[name]:value}));//(data, value)
    };

    const handleSubmit = () => {
        console.log("submitted .......");
       // setTimeout(() => {
            Navigate("/Login")

       // }, 3000)
    }

    console.log(data)


  function name(params) {}

  function name(params) {}
  return (
    <div>
      <form onSubmit={handleSubmit} actions="">
        <div>
          <input
            type="text"
            name="username"
            placeHolder="Enter Username"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeHolder="Enter your email"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeHolder="Enter your password"
            className={style.input}
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style = {style.btn} type ="submit" textContent = "submit"/>
      </form>
      <div>
        <span>Already have an account?</span>
        <span> Login</span>
        <span link to={'/Login'}> </span>

      </div>
    </div>

  );
};
export default SignUp;
