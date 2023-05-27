import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/Register";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Success from "./components/stripeResults/Success";
import Error from "./components/stripeResults/Error";
import Logout from "./components/Logout";
import DonationSearch from "./components/donationSearch/donationSearch";
import Home from "./components/homepage/homepage";
import History from "./components/history/History";
import Payment from "./components/stripeResults/Payment";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            <Route path="/error" element={<Error />} />
            <Route
              path="/search"
              element={<DonationSearch amount={amount} setAmount={setAmount} />}
            />
            <Route path="/history" element={<History />} />
            <Route
              path="/create-payment-intent"
              element={<Payment amount={amount} />}
            />
            <Route
              path="/logout"
              element={<Logout onLogout={handleUserState} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
