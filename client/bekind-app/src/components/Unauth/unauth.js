import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

function Unauth() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {" "}
      <MDBCard className="cardContainer w-25">
        <MDBCardBody>
          <MDBCardTitle>Unauthorized page</MDBCardTitle>
          <MDBCardText>Go back Home</MDBCardText>
          <MDBBtn>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Unauth;
