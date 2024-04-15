import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [credentials, setCredentials] = useState("");
    const navigate=useNavigate();

    const handleLogin =async() => {
        try {
          await axios.post("http://localhost:8080/user/login", {email,password},{withCredentials: true});
          navigate("/doc/home");
          console.log("Login successful!");

        }
        catch (error) {
          console.error(error);
          setCredentials("Invalid Credentials");
        }
      };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="d-flex flex-column align-items-center justify-content-center bg-light p-1 rounded" style={{width: '500px'}}>
  <h2 className='m-3'>Welcome back 🥳</h2>
  <div className="d-flex flex-column align-items-center">
    <input type="email"
    className="form-control my-1 mx-10"
    placeholder="Email"
    style={{width: '410px'}}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <input
    type="password"
    className="form-control my-1 mx-2"
    placeholder="Password"
    style={{width: '410px'}}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <button
    className="btn btn-primary m-2"
    style={{width: '410px'}}
    onClick={handleLogin}
    >
    Login
    </button>
    <p style={{ color: 'red', fontSize: 'small' }}>{credentials}</p>
  </div>
</div>
    </div>
  );
}

export default Login;
