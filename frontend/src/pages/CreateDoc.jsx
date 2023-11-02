import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import logo from '../components/Logo/logo.svg';


const CreateDoc = () => {

  const [title, setTitle] = useState('');
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();

  const handleSaveDoc = () => {
    const data = {title, userData};
    axios.post('http://localhost:5555/doc', data)
      .then(navigate('/'))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="d-flex align-items-center">
    <Link class="navbar-brand">
        <img src={logo} width="36" height="36" class="d-inline-block align-top ms-3" alt=""/>
      </Link>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <input class="form-control" type="text" placeholder="Document Name" value={title} onChange={(e) => setTitle(e.target.value)} />
        </li>
      </ul>
    </div>
    <form class="form-inline my-2 my-lg-0 d-flex align-items-center">
      <button type="button" class="btn btn-primary ms-auto me-3" onClick={handleSaveDoc}>Save</button>
    </form>
  </div>
</nav>
    <ReactQuill theme="snow" value={userData} onChange={setUserData}/>
</>
  );
};

export default CreateDoc;