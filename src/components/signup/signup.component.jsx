import React, { useState } from 'react';
import { createUserWithEmailPassword } from '../../utils/firebase/firebase';
import { Toaster, toast } from 'react-hot-toast';
import './signup.styles.scss';

const SignUp = ({toggleSignIn }) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords don't match");
            return;
        }
        try {
            await createUserWithEmailPassword(email, password);
            toast.success('Signed up successfully!');
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
        <Toaster/>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="input-group">
                    <label htmlFor="displayName">Username</label>
                    <input
                        type="text"
                        id="displayName"
                        name="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        required
                        placeholder="Enter your username"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm your password"
                    />
                </div>
                <div className="button-group">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <p className="signin-link" onClick={toggleSignIn}>Already have an account? <span className='cursor-pointer hover:text-white'>Sign In</span></p>

        </div>
        </>
    );
};

export default SignUp;
