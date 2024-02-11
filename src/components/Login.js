import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../contexts/UserContext';

const Login = () => {
  const {signIn, signinGoogle, facebooklogin} = useContext(Authcontext);
  const navigate = useNavigate();
  const handlelogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(error=>{
      console.error(error)
    })
    
  }
  const signingooglehandle = () =>{
    signinGoogle()
    .then(result=>{
      const user = result.user;
    })
    .catch(error=> console.error(error))
  }
  const signinfacebook = () =>{
    facebooklogin()
    .then(result=>{
      const user = result.user
    })
    .catch(error => console.error(error))
  }
  navigate('/order');
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-slate-200">Login now!</h1>
      <p className="py-6  text-slate-200">Enter your Email and Password.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-950">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered text-slate-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-950">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered text-slate-200" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-gray-950">Forgot password?</a>
            <Link to='/register'>Register now!</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={signingooglehandle} className="btn btn-primary">signinGoogle</button>
          <button onClick={signinfacebook} className="btn btn-primary">signinFacebook</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;