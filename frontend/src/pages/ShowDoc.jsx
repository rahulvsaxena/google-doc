import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDoc = () => {
  
const { id } = useParams();

const [doc, setDoc] = useState({});
useEffect(() => {
  axios
    .get(`http://localhost:5555/doc/${id}`)
    .then((response) => {
      setDoc(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);

return (
  <div>
    <h1>Show Doc</h1>
    <div>
      <span>Id: {doc._id}</span>
      <span>Title: {doc.title}</span>
      <span>User Data: {doc.userData}</span>
      <span>Create Time: {new Date(doc.createdAt).toString()}</span>
      <span>Last Update Time: {new Date(doc.updatedAt).toString()}</span>
    </div>
  </div>
);
};

export default ShowDoc;
