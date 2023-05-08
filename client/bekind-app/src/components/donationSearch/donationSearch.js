import React from "react";
import axios from "axios";
import {
  MDBInput,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCard,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../donationSearch/donationSearch.css";
import { useState } from "react";

function DonationSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [charities, setCharities] = useState([]);
  let myToken = localStorage.getItem("token");

  async function search() {
    //get request to get the nonprofit id
    let charities = fetch(
      `https://partners.every.org/v0.2/search/${searchInput}?apiKey=pk_live_458f42cf9a2a06e8cf56ee7a337aab41`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setCharities(data.nonprofits);
      });
  }
  async function saveDonation(charity) {
    console.log(charity);
    try {
      let response = await axios.post(
        "http://localhost:8080/donation",
        charity,
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        }
      );
      console.log("Donation saved successfully");
      alert("Donation saved successfully");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  return (
    <>
      <MDBContainer fluid className="d-flex my-5">
        <MDBRow className="align-items-center justify-content-center">
          <h3 className="fw-bold mb-0">Find a charity to donate today </h3>
          <MDBCol>
            <MDBInput
              label="search..."
              type="text"
              id="typeText"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  search();
                }
              }}
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <button onClick={search} className="button-1" md="4" color="dark">
              Let's go
            </button>
          </MDBCol>
          <MDBCol>
            {/* <MDBBtn
              onClick={saveDonation}
              className=" align-items-center my-5 mx-5"
              size="lg"
            >
              Donate🎁
            </MDBBtn> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid className="my-5">
        <MDBRow className="w-100 row-cols-1 row-cols-md-3 g-5">
          {charities.map((charity, i) => {
            return (
              <MDBCard key={i}>
                <MDBCardImage
                  position="top"
                  alt="..."
                  src={charity.coverImageUrl}
                />
                <MDBCardBody>
                  <MDBCardText>{charity.name}</MDBCardText>
                  <MDBCardText style={{ fontSize: "15px" }}>
                    {charity.location}
                  </MDBCardText>
                  <MDBCardTitle style={{ fontSize: "12px" }}>
                    {charity.description}
                  </MDBCardTitle>
                  <div style={{ fontSize: "12px" }}>
                    <p style={{ marginBottom: "0px", marginTop: "20px" }}>
                      Learn more:
                    </p>
                    <a
                      href={charity.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {charity.profileUrl}
                    </a>
                  </div>
                  <MDBBtn
                    onClick={() => saveDonation(charity)}
                    className=" align-items-center my-5 mx-5"
                    size="lg"
                  >
                    Donate🎁
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default DonationSearch;
