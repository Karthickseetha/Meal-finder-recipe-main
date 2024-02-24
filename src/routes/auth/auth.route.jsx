import React, { useState } from 'react';
import { SignIn, SignUp } from "../../components";

const Auth = () => {
    const [showSignIn, setShowSignIn] = useState(true); // State to toggle between sign-in and sign-up pages

    // Function to toggle between sign-in and sign-up pages
    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
    };

    return (
        <section className="mt-8">
            {showSignIn ? ( // Render sign-in page if showSignIn is true
                <SignIn toggleSignIn={toggleSignIn} /> // Pass toggleSignIn function to the sign-in component
            ) : (
                <SignUp toggleSignIn={toggleSignIn} /> // Render sign-up page if showSignIn is false
            )}
        </section>
    );
}

export default Auth;
