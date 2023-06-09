import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCard,
  MDBCardText,
} from "mdb-react-ui-kit";
import "../history/history.css";
import { useState, useEffect } from "react";
import Spinner from "./work-in-progress.gif";
import hexagon from "./hexagon-geometrical-shape-outline.png";
function History() {
  const [history, setHistory] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  let myToken = localStorage.getItem("token");
  const navigate = useNavigate();
  async function getHistory() {
    let response = await axios.get(
      `${process.env.REACT_APP_API_SERVER_ADDRESS}/history`,
      {
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      }
    );
    console.log(response);
    if (response.data.length === 0) {
      alert("No donations made");
      return navigate("/");
    }
    setHistory(response.data);
  }
  useEffect(() => {
    getHistory();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  }, []);

  return (
    <>
      <div style={{ display: "flex", marginTop: "10em" }}>
        {" "}
        {/* <img
          src={hexagon}
          alt="hexagon"
          style={{
            width: "2em",
            height: "2em",

            ,
          }}
        /> */}
      </div>
      {isSearching ? (
        <div
          class="lds-circle"
          style={{
            display: isSearching ? "flex" : "none",
          }}
        >
          <div></div>
        </div>
      ) : (
        // <img
        //   src={Spinner}
        //   style={{

        //     width: "5%",
        //     position: "fixed",
        //     left: "50%",
        //     borderRadius: "65px",
        //   }}
        //   alt="spinner"
        // />
        <>
          <h4
            className="myDonation"
            style={{ display: "flex", justifyContent: "center" }}
          >
            My Donations{" "}
          </h4>
          <MDBContainer fluid className="my-5 d-flex">
            {" "}
            <MDBRow className="row-cols-1 row-cols-md-4">
              {history.map((donation) => {
                return (
                  <MDBCard
                    key={donation.id}
                    style={{
                      marginBottom: "1em",
                    }}
                    className="cardContainer"
                  >
                    <div className="imageContainer">
                      <MDBCardImage
                        className="cardImg"
                        position="top"
                        alt="card-image"
                        style={{ height: "150px" }}
                        src={donation.coverImageUrl}
                      />
                    </div>
                    <MDBCardBody className="p-2">
                      <p style={{ fontSize: "12px" }}>Donated amount:</p>
                      <MDBCardText style={{ fontSize: "15px" }}>
                        {new Intl.NumberFormat(undefined, {
                          style: "currency",
                          currency: "EUR",
                        }).format(donation.amount)}
                      </MDBCardText>
                      <MDBCardText className="title-name">
                        {donation.name}
                      </MDBCardText>
                      <MDBCardText style={{ fontSize: "12px" }}>
                        {donation.location}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                );
              })}
            </MDBRow>
          </MDBContainer>
        </>
      )}
    </>
  );
}

export default History;
