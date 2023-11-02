import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../components/Logo/logo.svg';
import DocTable from '../components/home/DocTable.jsx';
import { Link } from 'react-router-dom';
const Home = () => {
  
const [docs, setDocs] = useState([]);
useEffect(() => {
  axios
    .get('http://localhost:5555/doc')
    .then((response) => {
      setDocs(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


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
            Google Doc
        </li>
      </ul>
    </div>
    <form class="form-inline my-2 my-lg-0 d-flex align-items-center">
    <Link to='/doc/create'>
  <button class="btn btn-primary ms-auto me-3">Create</button>
</Link>
    </form>
  </div>
</nav>
<DocTable docs={docs} />
  </>
)
}

export default Home;