import React from 'react';

const Signup = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="d-flex flex-column align-items-center justify-content-center bg-light p-1 rounded" style={{width: '500px'}}>
  <h2 className='m-3'>Excited for you to join us 🎉</h2>
  <form className="d-flex flex-column align-items-center">
    <input type="Name" className="form-control my-1 mx-10" placeholder="Name" style={{width: '410px'}} required />
    <input type="email" className="form-control my-1 mx-10" placeholder="Email" style={{width: '410px'}} required />
    <input type="password" className="form-control my-1 mx-2" placeholder="Password" style={{width: '410px'}} required />
    <button type="submit" className="btn btn-primary m-3" style={{width: '410px'}}>Signup</button>
  </form>
</div>

    </div>
  );
}

export default Signup;
