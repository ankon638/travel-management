import React, { useContext } from 'react';
import { ColorRing } from 'react-loader-spinner'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            className="mx-auto"></ColorRing>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace={true} ></Navigate>
    }
    return children
};

export default PrivateRoute;