import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AsyncSelect from "react-select/async";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCard,
  MDBCardText,
  MDBInputGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../donationSearch/donationSearch.css";
import { useState } from "react";
import { motion } from "framer-motion";
import BackToTopButton from "../homepage/BackToTop";

function DonationSearch({ amount, setAmount }) {
  const [searchInput, setSearchInput] = useState("");
  const [charities, setCharities] = useState([]);

  const navigate = useNavigate();
  let myToken = localStorage.getItem("token");

  async function search() {
    //get request to get the nonprofit
    fetch(
      `https://partners.every.org/v0.2/search/${searchInput}?apiKey=pk_live_458f42cf9a2a06e8cf56ee7a337aab41`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setCharities(data.nonprofits);
      });
  }

  function searchEnvironment() {
    fetch(
      "https://partners.every.org/v0.2/browse/environment?apiKey=pk_live_458f42cf9a2a06e8cf56ee7a337aab41"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharities(data.nonprofits);
      });
  }

  function searchAnimals() {
    fetch(
      "https://partners.every.org/v0.2/browse/animals?apiKey=pk_live_458f42cf9a2a06e8cf56ee7a337aab41"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharities(data.nonprofits);
      });
  }

  function searchHousing() {
    fetch(
      "https://partners.every.org/v0.2/browse/housing?apiKey=pk_live_458f42cf9a2a06e8cf56ee7a337aab41"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharities(data.nonprofits);
      });
  }

  async function saveDonation(charity) {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API_SERVER_ADDRESS}/donation`,
        { charity, amount },

        {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        }
      );
      console.log("response", response);

      navigate("/create-payment-intent");

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <div>
      <MDBContainer
        fluid
        className="d-flex my-5 align-items-center justify-content-center"
      >
        <MDBRow className="d-flex ">
          <MDBCol>
            <motion.h3
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="fw-bold mb-0"
            >
              Search for a charity or cause
            </motion.h3>
            <p>Find and align with a charity that supports your passions</p>
            <MDBCol className="d-inline-flex">
              <AsyncSelect
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "40vw",
                  }),
                }}
                ariaLiveMessages={{ onFocus: "" }}
                cacheOptions
                //
                options={charities}
                noOptionsMessage={() => null}
                getOptionLabel={(charity) => charity.name}
                getOptionValue={(charity) => charity.id}
                loadOptions={search}
                defaultOptions
                onInputChange={(e) => setSearchInput(e)}
                onChange={(data) => setCharities(data.nonprofits)}
                placeholder="search by type..."
                type="text"
                id="typeText"
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    search();
                  }
                }}
              />{" "}
            </MDBCol>
            <MDBCol>
              <MDBBtn className="btnDemo" onClick={searchEnvironment}>
                environment
              </MDBBtn>
              <MDBBtn className="btnDemo" onClick={searchAnimals}>
                animals
              </MDBBtn>
              <MDBBtn className="btnDemo" onClick={searchHousing}>
                housing
              </MDBBtn>
              <MDBBtn className="btnDemo">......</MDBBtn>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer fluid>
        <MDBRow className=" row-cols-1 row-cols-md-4  ">
          {charities.map((charity) => {
            return (
              <MDBCard key={charity.id} className="cardContainer">
                <div className="imageCont">
                  <MDBCardImage
                    position="top"
                    alt="..."
                    src={charity.coverImageUrl}
                    className="cardImg"
                    style={{ height: "150px" }}
                  />
                </div>
                <MDBCardBody>
                  <MDBCardText>{charity.name}</MDBCardText>
                  <MDBCardText style={{ fontSize: "15px" }}>
                    {charity.location}
                  </MDBCardText>
                  <MDBCardTitle style={{ fontSize: "12px" }}>
                    {charity.description}
                  </MDBCardTitle>
                  <div class="wrapper">
                    <a
                      class="cta"
                      href={charity.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Learn more</span>
                    </a>
                  </div>{" "}
                  <MDBInputGroup className="mb-1 mt-5">
                    <input
                      className="form-control"
                      onChange={(e) => setAmount(parseFloat(e.target.value))}
                      placeholder="Enter amount.."
                      type="text"
                    />
                    <button
                      className="btnDonate"
                      outline
                      onClick={() => saveDonation(charity, amount)}
                    >
                      Donate
                    </button>
                  </MDBInputGroup>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </MDBRow>
      </MDBContainer>
      <BackToTopButton />
    </div>
  );
}

export default DonationSearch;
