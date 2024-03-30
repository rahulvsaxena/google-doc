import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const handleSignUp = async () => {
        const res = await axios.post("http://localhost:5000/api/signup", {
          name,
          email,
          password,
        });
        const data = await res.data;
        console.log(data);
        return data;
      };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="d-flex flex-column align-items-center justify-content-center bg-light p-1 rounded" style={{width: '500px'}}>
  <h2 className='m-3'>Excited for you to join us 🎉</h2>
  <form className="d-flex flex-column align-items-center">
    <input
    type="Name"
    className="form-control my-1 mx-10"
    placeholder="Name"
    style={{width: '410px'}}
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <input type="email"
    className="form-control my-1 mx-10"
    placeholder="Email"
    style={{width: '410px'}}
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <input
    type="password"
    className="form-control my-1 mx-2"
    placeholder="Password"
    style={{width: '410px'}}
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <button
    type="submit"
    className="btn btn-primary m-3"
    style={{width: '410px'}}
    onClick={handleSignUp}
    >
    Signup
    </button>
  </form>
</div>

    </div>
  );
}

export default Signup;
