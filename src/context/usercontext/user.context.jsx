// UserContext.js

import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocument } from '../../utils/firebase/firebase';

const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
            if (user) {
                createUserDocument(user);
            }
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUserContext = () => useContext(UserContext);

export { UserContext, UserProvider, useUserContext };
