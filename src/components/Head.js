import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../contexts/UserContext';

const Head = () => {
  const {user, logout} = useContext(Authcontext);
  
  const logouthandle = ()=>{
    logout()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    return (
        <div>
          <div className="navbar bg-info">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl" to='/'>Web Galaxy House</Link>
    <Link className="btn btn-ghost text-xl"  to='/home'>Home</Link>
    <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
    <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
    <Link className="btn btn-ghost text-xl" to='/order'>Orders</Link>
    {user?.email && <span>welcome {user.email}</span>} 

    {
      user?.email? <button onClick={logouthandle} className="btn">Signout</button> :
      <Link to='/login'></Link>
    }
  </div>
  
</div>
        </div>
    );
};

export default Head;