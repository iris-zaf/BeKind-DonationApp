import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Navbar.css";

const Navbar = ({ userState }) => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <>
      {/* <img src="/teamwork.png" alt="holding-hands" /> */}
      {userState ? (
        <MDBNavbar expand="lg" bgColor="bg-warning bg-gradient">
          <MDBContainer fluid>
            <MDBNavbarBrand to="/register" className="m-2 fs-1 text-dark">
              <MDBIcon fas icon="hands" /> BeKind
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0 container">
                <MDBNavbarItem className="m-4 list">
                  <Link to="/homePage" className="text-dark list">
                    Homepage
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/search" className="text-dark list">
                    Search for a donation
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/history" className="text-dark list">
                    My Donations
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/logout" className="text-dark list">
                    Log out
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      ) : (
        <MDBNavbar expand="lg" bgColor="bg-warning bg-gradient">
          <MDBContainer fluid>
            <MDBNavbarBrand to="/" className="m-2 fs-1 text-dark">
              {" "}
              <MDBIcon fas icon="hands" />
              BeKind
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="m-4">
                  <Link to="/register" className="text-dark">
                    Register
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4">
                  <Link to="/" className="text-dark">
                    Login
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      )}
    </>
  );
};

export default Navbar;
