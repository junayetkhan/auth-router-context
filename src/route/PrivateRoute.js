import React, { useContext } from 'react';
import { Authcontext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    if(user && user.uid){
        return children;
    }
    if(loading){
        return <div>Loading.......!</div>
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;