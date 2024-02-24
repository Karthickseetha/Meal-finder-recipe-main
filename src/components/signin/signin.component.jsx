// SignIn.js

import React, { useState } from 'react';
import { signInWithEmailPassword, signInWithGoogle } from '../../utils/firebase/firebase';
import { Toaster, toast } from 'react-hot-toast';
import './signin.styles.scss';

const SignIn = ({ toggleSignIn }) => { // Receive toggleSignIn function as props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Email and password are required');
            return;
        }

        try {
            await signInWithEmailPassword(email, password);
            toast.success(`'Signed in successfully!'`);
            setEmail('');
            setPassword('');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            toast.success('Signed in with Google successfully!');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Toaster />
            <div className='signin-container'>
                <h2>Sign In</h2>
                <form onSubmit={handleSignIn}>
                <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit" onClick={handleSignIn}>Sign In</button>
                        <button type="button" onClick={handleGoogleSignIn}>Sign In with Google</button>
                    </div>
                </form>
                {/* Link to toggle between sign-in and sign-up pages */}
                <p className="signup-link" onClick={toggleSignIn}>Don't have an account? 
                <span className='cursor-pointer hover:text-white'>Sign Up</span></p>
            </div>
        </>
    );
};

export default SignIn;
