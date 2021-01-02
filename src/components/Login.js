import React, {useState} from "react"

export default function Login({login, error}){
  const [details, setDetails] = useState({ name:"", email:"", password:""});
  const submitHandler = e => {
    e.preventDefault(); 
    login(details);
  }

  const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "montserrat, sans-serif"
    };

  return(
    <form onSubmit = {submitHandler} > 
      <div style={mystyle}> 
        <h2> Login </h2>
        {(error !== "") ? <div className="error"> {error} </div>: ""}
        <div style={{padding: "1rem"}}> 
          <label htmlFor = "name"> Name: </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            onChange = { e => setDetails({...details, name:e.target.value})} 
            value = {details.name} 
          />
        </div>

        <div style={{padding: "1rem"}}> 
          <label htmlFor = "email"> Email: </label>
          <input 
            type="text" 
            name="name" 
            id="email" 
            onChange = { e => setDetails({...details, email:e.target.value})} 
            value = {details.email} 
          />
        </div>

        <div style={{padding: "1rem"}}> 
          <label htmlFor = "password"> Password: </label>
          <input 
            type="text" 
            name="password" 
            id="password" 
            onChange = { e => setDetails({...details, password:e.target.value})} 
            value = {details.password} 
          />
        </div>

        <input style={mystyle} type="submit" value="Login"/>
      </div>
    </form>
  )
}
