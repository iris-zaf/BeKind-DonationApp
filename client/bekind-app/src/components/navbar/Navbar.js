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

const Navbar = ({ userState }) => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <>
      {userState ? (
        <MDBNavbar expand="lg" bgColor="dark ">
          <MDBContainer fluid>
            <MDBNavbarBrand className="m-2 fs-1">
              <Link to="/" className="text-light">
                <MDBIcon fas icon="hands" /> BeKind
              </Link>
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
                <MDBNavbarItem className="m-4 list active">
                  <Link to="/" className="text-light">
                    Homepage
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/search" className="text-light">
                    Search for a donation
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/history" className="text-light">
                    My Donations
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4 list">
                  <Link to="/logout" className="text-light">
                    Log out
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      ) : (
        <MDBNavbar expand="lg" bgColor="dark ">
          <MDBContainer fluid>
            <MDBNavbarBrand className="m-2 fs-1 ">
              <Link to="/" className="text-light">
                <MDBIcon fas icon="hands" /> BeKind
              </Link>
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
                  <Link to="/register" className="text-light">
                    Register
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4">
                  <Link to="/login" className="text-light">
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
