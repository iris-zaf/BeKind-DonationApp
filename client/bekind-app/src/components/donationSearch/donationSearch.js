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
  MDBIcon,
} from "mdb-react-ui-kit";
import "../donationSearch/donationSearch.css";
import { useState } from "react";

function DonationSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [charities, setCharities] = useState([]);
  const [amount, setAmount] = useState(0);
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
    try {
      let response = await axios.post(
        "http://localhost:8080/donation",
        { charity, amount },

        {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        }
      );

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
            <button onClick={search} className="button1" md="4" color="dark">
              Search
            </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid className="my-5">
        <MDBRow className="w-100 row-cols-1 row-cols-md-3 g-5">
          {charities.map((charity) => {
            return (
              <MDBCard key={charity.id}>
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
                  <MDBInput
                    label="Enter amount..."
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    id="form1"
                    type="text"
                  />
                  <button
                    onClick={() => saveDonation(charity, amount)}
                    className=" align-items-center my-5 mx-5"
                    size="lg"
                  >
                    Donate
                    <br />
                    <MDBIcon fas icon="gift m-2" />
                  </button>
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
