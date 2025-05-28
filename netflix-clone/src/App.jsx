import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthChecked(true); // mark that auth status is checked
    });

    return () => unsubscribe();
  }, []);

  if (!authChecked) {
    return <div>Loading...</div>; // or a spinner
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/player/:id"
          element={user ? <Player /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
};

export default App;
