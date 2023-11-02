import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteDoc = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteDoc = () => {
    axios
      .delete(`http://localhost:5555/doc/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Delete This Document??</h1>
      <div>
        <h3>Are You Sure You want to delete this document?</h3>
        <button onClick={handleDeleteDoc} class="btn btn-primary">Yes, Delete it</button>
      </div>
    </div>
  );
};

export default DeleteDoc;