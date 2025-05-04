import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = use(AuthContext)
    // console.log(user)

    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center min-h-screen'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRouter;