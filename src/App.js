import React, {useState} from 'react';
import Login from "./components/Login"

function App() {
 
  const adminUser = {
    email: "smileyshivam3042@gmail.com",
    password: "smiley"
  }

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [error, setError] = useState("");
  
  const login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password ){
      console.log("Yes!! U are in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details Do not Match");
      setError("Details Do not Match!!");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
      {(user.email !== "") ? 
        (
          <div className= "welcome">
            <h2> Welcome <span> {user.name} </span> </h2>
            <button onClick={Logout}> Logout </button>
          </div>
        ) : (
          <Login login = {login} error = {error}/>
        )  
      }

    </div>
  );
}

export default App;
