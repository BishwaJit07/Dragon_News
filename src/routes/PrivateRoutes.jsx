import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading}= useContext(AuthContext);
    
    if(loading){
        return   <Spinner  animation="border" variant="success" />
    }
          if (user){
            return children;
          }

    return  < Navigate to='/login' state={{from : location}} replace/>;
};

export default PrivateRoutes;