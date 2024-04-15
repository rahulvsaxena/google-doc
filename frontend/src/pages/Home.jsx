import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../components/Logo/logo.svg';
import DocTable from '../components/home/DocTable.jsx';
import { Link } from 'react-router-dom';
import { FaPlus, FaEllipsisV, FaFolder } from 'react-icons/fa';
axios.defaults.withCredentials = true;

const Home = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/doc',{withCredentials: true})
      .then((response) => {
        setDocs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <Link class="navbar-brand">
              <img src={logo} width="36" height="36" class="d-inline-block align-top ms-3" alt=""/>
            </Link>
            <ul class="navbar-nav">
              <li class="nav-item active" style={{fontSize: '20px'}}>Docs</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-8">
            <div class="input-group">
              <input class="form-control rounded" type="search" placeholder="Search" aria-label="Search"/>
            </div>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </nav>
      <div class="bg-light p-2 d-flex flex-column align-items-start justify-content-center" style={{height: '250px'}}>
        <p class="mb-1" style={{marginLeft: '25%', marginTop: '10px'}}>Start a new document<span style={{marginLeft: '400px'}}><FaEllipsisV size={15}/></span></p>
        <Link to='/doc/create' style={{marginLeft: '23%', marginTop: '0px'}}>
          <button class="btn" style={{backgroundColor: '#007bff', color: 'white', width: '95px', height: '120px', marginLeft: '25%', marginTop: '20px'}}>
            <FaPlus size={25}/>
          </button>
        </Link>
        <p class="mt-1" style={{fontSize: '12px',marginLeft: '25.5%'}}><b>Blank</b></p>
      </div>
      <div class="d-flex align-items-center justify-content-start" style={{marginLeft: '25%', marginTop: '10px'}}>
        <p class="mb-0" style={{fontSize: '12px'}}><b>My Document</b></p>
        <p class="mb-0 ml-auto" style={{fontSize: '12px',marginLeft: '30%'}}>Date Created</p>
        <FaFolder style={{marginLeft: '12.5%'}}/>
      </div>
      <DocTable docs={docs} />
    </>
  )
}

export default Home;
