import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import logo from '../components/Logo/logo.svg';


const EditDoc = () => {
  const [title, setTitle] = useState('');
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5555/doc/${id}`)
      .then((response) => {
        setUserData(response.data.userData);
        setTitle(response.data.title);
      }).catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditDoc = () => {
    const data = {
      title,
      userData,
    };

    axios
      .put(`http://localhost:5555/doc/${id}`, data)
      .then(() => {navigate('/');})
      .catch((error) => {console.log(error);});
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="d-flex w-100 justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <a class="navbar-brand" href="#">
        <img src={logo} width="36" height="36" class="d-inline-block align-top ms-3" alt=""/>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <input class="form-control" type="text" placeholder="Document Name" value={title} onChange={(e) => setTitle(e.target.value)} />
        </li>
      </ul>
    </div>
    <form class="form-inline my-2 my-lg-0 d-flex align-items-center">
      <button type="button" class="btn btn-primary ms-auto me-3" onClick={handleEditDoc}>Save</button>
    </form>
  </div>
</nav>
    <ReactQuill theme="snow" value={userData} onChange={setUserData}/>
</>
  );
};

export default EditDoc;



