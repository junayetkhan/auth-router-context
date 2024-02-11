import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../contexts/UserContext';


const Register = () => {
const {createUser, signinGoogle} = useContext(Authcontext);
  
    const handregister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email, password)
        .then(result=>{
          const user = result.user
          console.log(user)
        })
        .catch(error=>{
          console.error(error)
        })
        form.reset();
    }
    const signingooglehandle = () =>{
      signinGoogle()
      .then(result=>{
        const user = result.user;
      })
      .catch(error=> console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-slate-200">Register now!</h1>
      <p className="py-6  text-slate-200">Enter your Name Email and Password.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handregister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text text-slate-950">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered text-slate-200" required />
        </div>
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
            <Link to='/login' className="label-text-alt link link-hover text-gray-950">Allready have a account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button onClick={signingooglehandle} className="btn btn-primary">signinGoogle</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;