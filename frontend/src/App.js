import React from 'react';
import { Routes, Route , BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateDoc from './pages/CreateDoc.jsx';
import EditDoc from './pages/EditDoc.jsx';
import DeleteDoc from './pages/DeleteDoc.jsx';
import Start from './pages/Start.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/user/home' element={<Home />} />
      <Route path='/doc/create' element={<CreateDoc />} />
      <Route path='/doc/edit/:id' element={<EditDoc />} />
      <Route path='/doc/delete/:id' element={<DeleteDoc />} />
      <Route path='/' element={<Start />} />
      <Route path='/user/login' element={<Login />} />
      <Route path='/user/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;