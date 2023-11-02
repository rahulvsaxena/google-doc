import React from 'react';
import { Routes, Route , BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateDoc from './pages/CreateDoc.jsx';
// import ShowDoc from './pages/ShowDoc.jsx';
import EditDoc from './pages/EditDoc.jsx';
import DeleteDoc from './pages/DeleteDoc.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doc/create' element={<CreateDoc />} />
      {/* <Route path='/doc/details/:id' element={<ShowDoc />} /> */}
      <Route path='/doc/edit/:id' element={<EditDoc />} />
      <Route path='/doc/delete/:id' element={<DeleteDoc />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;