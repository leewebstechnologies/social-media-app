import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Maryam Ibrahim",
      profilePic:
        "https://media.istockphoto.com/id/1353970283/photo/african-woman-in-rural-africa.jpg?s=612x612&w=0&k=20&c=wRWSwlmpe4w5UbgBFOHrQWQHK_7SoIpTHRhyeB_ScLo=",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
