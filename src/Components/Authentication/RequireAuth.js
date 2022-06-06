import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();


    if (loading) {
        return (
            <div>
                <div className="flex items-center justify-center h-screen">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-hotpink" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }



    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
        
    } else {
        return children;
    }

    
};

export default RequireAuth;