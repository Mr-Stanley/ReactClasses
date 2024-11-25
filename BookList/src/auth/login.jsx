import React from 'react'
import CustomButton from '../reuseables/CustomButton';
import style from "../styles/Login.mOdule.css";

const Login =() => {

    const loginDetails = {

    
        email : "",
        password: "",
    }

    const [data, setData] = useState(loginDetails)


    function userLogin(event) {
        const {name, value} = event.target
        setloginData((prevData) => {
            return {...prevData, [name]: value}

        });

       // setData ((prevData) => ({...prevData,[name]:value}));//(data, value)
    }

    console.log(data)
    return(
        <div>
        <form action = ""> 
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
        <CustomButton style = {style.btn} type ="submit" textContent = "Login"/>
        </form>
        <div>
        <span>Dont Have An Account?</span>
    
        <span> <link to={'/Login'}>Login</link> </span>

      </div>
        </div>
    )
}
export default Login;