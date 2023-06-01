import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/Register";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Success from "./components/stripeResults/Success";
import Error from "./components/stripeResults/Error";
import Logout from "./components/logout/Logout";
import DonationSearch from "./components/donationSearch/donationSearch";
import Home from "./components/homepage/homepage";
import History from "./components/history/History";
import Payment from "./components/stripeResults/Payment";
import ErrorPage from "./components/404/404";
function App() {
  let token = localStorage.getItem("token");
  //double exclamation means that the value is boolean
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);

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
          <div class="multi-spinner-container">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_pZ0gNA6nQF.json"
              background="transparent"
              speed="1"
              style={{
                width: " 8em",
                height: "8em",

                top: "50%",
                left: "50% ",
              }}
              loop
              autoplay
            ></lottie-player>{" "}
          </div>
        </>
      ) : (
        <>
          <Navbar userState={isLoggedIn} />
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login onLogin={handleUserState} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route
              path="/error"
              element={isLoggedIn ? <Error /> : "Please log in"}
            />
            <Route
              path="/search"
              element={
                isLoggedIn ? (
                  <DonationSearch amount={amount} setAmount={setAmount} />
                ) : (
                  "Please log in"
                )
              }
            />
            <Route
              path="/history"
              element={isLoggedIn ? <History /> : "Please log in"}
            />
            <Route
              path="/create-payment-intent"
              element={
                isLoggedIn ? <Payment amount={amount} /> : "Please log in"
              }
            />
            <Route
              path="/logout"
              element={<Logout onLogout={handleUserState} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
