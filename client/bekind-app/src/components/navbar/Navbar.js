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
import bee from "../navbar/bee.png";
import "../navbar/Navbar.css";
const Navbar = ({ userState }) => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <>
      {userState ? (
        <MDBNavbar expand="lg" bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand className="m-2 fs-1">
              <Link to="/" className="text-dark">
                <img src={bee} alt="bee" style={{ width: "1em" }} />
                Kind
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              style={{ color: "black" }}
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
              <MDBNavbarNav
                className="me-auto mb-2 mb-lg-0 container "
                style={{ alignItems: "center" }}
              >
                <MDBNavbarItem className="m-4  active">
                  <Link to="/" className="text-dark list">
                    Home
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/search" className="text-dark">
                    Search for a donation
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/history" className="text-dark">
                    My Donations
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/logout" className="text-dark">
                    Log out
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      ) : (
        <MDBNavbar expand="lg" bgColor="light ">
          <MDBContainer fluid>
            <MDBNavbarBrand className="m-2 fs-1 ">
              <Link to="/" className="text-dark">
                <img src={bee} alt="bee" style={{ width: "1em" }} />
                BeKind
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              style={{ color: "black" }}
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
              <MDBNavbarNav
                className="me-auto mb-2 mb-lg-0"
                style={{ alignItems: "center" }}
              >
                <MDBNavbarItem className="m-4">
                  <Link to="/register" className="text-dark">
                    Register
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4">
                  <Link to="/login" className="text-dark">
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
