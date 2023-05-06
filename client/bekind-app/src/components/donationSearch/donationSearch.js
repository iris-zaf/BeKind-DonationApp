import React from "react";
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
} from "mdb-react-ui-kit";
import "../donationSearch/donationSearch.css";
import { useState } from "react";

function DonationSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [charities, setCharities] = useState([]);
  async function search() {
    //get request to get the nonprofit id
    let charities = fetch(
      `https://partners.every.org/v0.2/search/${searchInput}?apiKey=pk_live_458f42cf9a2a06e8cf56ee7a337aab41`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        console.log("data.nonprofits", data.nonprofits);
        setCharities(data.nonprofits);
        // console.log(
        //   "data.nonprofits[0].coverImageUrl",
        //   data.nonprofits[0].coverImageUrl
        // );
      });
  }

  return (
    <>
      <MDBContainer fluid className="d-flex my-5">
        <MDBRow className="align-items-center justify-content-center">
          <h3 className="fw-bold mb-0">Find a cause to donate </h3>
          <MDBCol>
            <MDBInput
              label="Search..."
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
              Click me
            </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid className="my-5">
        <MDBRow className="w-100 row-cols-1 row-cols-md-3 g-5">
          {charities.map((charity, i) => {
            console.log(charity);
            return (
              <MDBCard key={i}>
                <MDBCardImage
                  position="top"
                  alt="..."
                  src={charity.coverImageUrl}
                />
                <MDBCardBody>
                  <MDBCardText>Description</MDBCardText>
                  <MDBCardTitle>{charity.profileUrl}</MDBCardTitle>
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
