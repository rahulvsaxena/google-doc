
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCreate, MdDelete, MdMoreVert } from 'react-icons/md';

const DocsCard = ({ docs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="container">
      <div className="row">
        {docs.map((doc, index) => (
          <div className="col-sm-12 d-flex align-items-center" style={{marginTop:'1rem', marginBottom: '1rem'}}>
            <h6 style={{marginLeft:'21.4%',marginRight: '15.3%', width: '200px', fontSize: '13px'}}>{doc.title}</h6>
            <p style={{marginRight: '10.2%', fontSize: '13px'}}>{new Date(doc.createdAt).toLocaleDateString()}</p>
            <div>
              <MdMoreVert size={20} onClick={() => toggleDropdown(index)} />
              {activeIndex === index && (
                <div className="dropdown-menu show" aria-labelledby="dropdownMenuLink">
                  <Link className="dropdown-item" to={`/doc/edit/${doc._id}`}>Edit</Link>
                  <Link className="dropdown-item" to={`/doc/delete/${doc._id}`}>Delete</Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocsCard;