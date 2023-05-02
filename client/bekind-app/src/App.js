import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./Button";
import Success from "./components/stripeResults/Success";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUserState = (state) => {
    setIsLoggedIn(state);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <div>
            <div class="multi-spinner-container">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner">
                    <div class="multi-spinner">
                      <div class="multi-spinner">
                        <div class="multi-spinner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar userState={isLoggedIn} />
          <Routes>
            <Route path="/" element={<Login onLogin={handleUserState} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-checkout-session" element={<Button />} />
            <Route path="/success.html" element={<Success />} />
            {/* <Route path='/logout' element={<Logout onLogout = {handleUserState}/>} /> */}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
