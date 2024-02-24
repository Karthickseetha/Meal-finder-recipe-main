
import React from 'react';
import { FaBars, FaHeart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { pageLinks } from '../../constants';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/usercontext/user.context';
import { signOutUser } from '../../utils/firebase/firebase';
import './navbar.styles.scss'
const Navbar = () => {
    const { currentUser } = useUserContext();

    const handleSignOut = async () => {
        await signOutUser();
    };

    return (
        <header>
            <Link to="/" className="logo">
                TASTU
            </Link>

            <nav className="navbar">
                <ul className="nav-links">
                    {pageLinks.map((link) => (
                        <li key={link.id}>
                            <Link to={link.href} className="nav-link">
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="icons">
               


                {currentUser ? (
                    <>
                        <span>{currentUser.displayName}</span>
                        <FaSignOutAlt onClick={handleSignOut} className='signout' />
                    </>
                ) : (
                    <Link to="/auth">
                        <FaSignInAlt  />
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Navbar;
