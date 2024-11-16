import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FIrebase/firebase.config";

export const AuthProviderContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // console.log(user, loading);

  //   Sign in a user

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Register a New user

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Logout

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updatedUserProfile = (updateProfileData) => {
    return updateProfile(auth.currentUser, updateProfileData);
  };

  const info = {
    user,
    setUser,
    handleRegister,
    logOut,
    loginUser,
    loading,
    updatedUserProfile,
  };

  //   User Catch

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthProviderContext.Provider value={info}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;
