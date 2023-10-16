import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

const SignIn = () => {
    const { name } = useContext(AuthContext)
    return (
        <div>
            <h3>Name: {name}</h3>
            <h2>Please SignIN</h2>
        </div>
    );
};

export default SignIn;