import React from 'react';
import { Link } from 'react-router-dom';
import { MdCreate, MdDelete } from 'react-icons/md';

const DocsCard = ({ docs }) => {
  return (
    <div className="container">
      <div className="row">
        {docs.map((doc) => (
          <div className="col-sm-3 d-flex align-items-stretch" style={{marginTop:'1rem', marginBottom: '1rem'}}>
            <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h5 className="card-title">{doc.title}</h5>
              </div>
              <div style={{marginTop: 'auto'}}>
                <Link to={`/doc/edit/${doc._id}`} style={{ marginLeft: '100px' ,marginRight: '20px'}}>
                  <MdCreate size={20} />
                </Link>
                <Link to={`/doc/delete/${doc._id}`} style={{ color: 'red' }}>
                  <MdDelete size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocsCard;
