import React, { useState } from "react";

import {
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
} from "mdb-react-ui-kit";
import "../homepage/HomePage.css";

import axios from "axios";
import Testimonials from "../homepage/Testimonials";
import BackToTopButton from "../homepage/BackToTop";

import instagram from "../homepage/icons8-instagram-100.png";
import facebook from "../homepage/icons8-facebook-50.png";
import twitter from "../homepage/icons8-twitter-50.png";
function Home() {
  const [recipient_email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  function sendMail() {
    if (recipient_email) {
      axios
        .post("http://localhost:8080/send_email", {
          recipient_email,
        })
        .then(() => alert("Message send successfully"))
        .catch((error) => console.log(error));
      return;
    }
    return alert("Fill in all the fields to continue");
  }

  return (
    <div className="smallCardsCont">
      <MDBContainer fluid className="p-5 my-5 section">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="img-fluid"
              alt="Children image"
            />
          </MDBCol>

          <MDBCol col="5" md="5">
            <div class="animatedText">Simple, </div>
            <div class="animatedText">
              <span> Powerful Charities</span>
            </div>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, dico forensibus mei et, nemore
              albucius nec eu, elitr nonumes graecis pri ex. Ius ea zril
              expetendis scribentur, et scripta regione nec, pro te audire
              utroque senserit. Est te sale probo maluisset, ex iusto libris
              denique nec. Et ornatus ullamcorper est. Lorem ipsum dolor sit
              amet, dico forensibus mei et, nemore albucius nec eu, elitr
              nonumes graecis pri ex.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBRow className="section">
        <MDBCol col="5" md="5" className="smallCardsCont">
          <MDBCol>
            <MDBCard className="box">
              <MDBIcon
                fas
                icon="hands-holding "
                className=" mt-4 "
                size="3x"
                position="top"
              ></MDBIcon>
              <MDBCardBody>
                <MDBCardTitle>Support 50+ nonprofits</MDBCardTitle>
                <MDBCardText>
                  Choose from over 50 charities that are making a big impact on
                  health, children,animals, the environment, education and more
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={{ backgroundColor: "#e5e5e5" }} className=" box">
              <MDBIcon
                fas
                icon="fist-raised"
                className=" mt-4 "
                size="3x"
                position="top"
              ></MDBIcon>
              <MDBCardBody>
                <MDBCardTitle>Be The Change</MDBCardTitle>
                <MDBCardText>
                  Every time you donate you are telling yourself a story about
                  what's important to you.The results? Empathy, mindfulness and
                  gratitude!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className=" box">
              <MDBIcon
                fas
                icon="people-carry "
                className=" mt-4 "
                size="3x"
                position="top"
              ></MDBIcon>
              <MDBCardBody>
                <MDBCardTitle>Help Yourself While Helping Others</MDBCardTitle>
                <MDBCardText>
                  Donating for a good cause keeps you motivated and feeling
                  good🤗
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBCol>
        <MDBCol col="5" md="6">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_3dweyago.json"
            background="transparent"
            speed="1"
            style={{
              width: "60vw",
              height: "80vh",
              margin: "auto",
              display: "block",
            }}
            loop
            autoplay
          ></lottie-player>
        </MDBCol>
      </MDBRow>{" "}
      <MDBRow>
        <MDBCol className="testimonials">
          <h5>What volunteers say about us</h5>
          <div>
            <Testimonials />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="d-flex p-5 section-footer mt-5">
        <MDBCol className="footer-list col-3">
          <ul>
            <li>HOME</li>
            <li>SEARCH FOR A DONATION</li>
            <li>MY DONATIONS</li>
            <li>ABOUT</li>
          </ul>
        </MDBCol>
        <MDBCol
          className="col-3"
          style={{
            justifyContent: "space-between",
          }}
        >
          <MDBCard className="contactCard justify-content-center align-items-center p-4 ">
            <MDBCardTitle className="fs-5 ">
              Subscribe to our newsletter✉️
            </MDBCardTitle>
            <MDBInput
              type="email"
              id="form4Example2"
              wrapperClass="mb-4 mt-3"
              label="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <MDBInput
              wrapperClass="mb-5"
              textarea
              id="form4Example3"
              rows={4}
              label="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-5"
              textarea
              id="form4Example3"
              rows={4}
              label="Message"
              onChange={(e) => setMessage(e.target.value)}
            /> */}

            <button type="submit" onClick={() => sendMail()}>
              Stay in touch
            </button>
          </MDBCard>
        </MDBCol>
        <MDBCol className="col-3 socialContainer">
          <h5>FOLLOW US</h5>
          <img src={instagram} className="socialIcons" alt="instagram" />
          <img src={facebook} className="socialIcons" alt="facebook" />
          <img src={twitter} className="socialIcons" alt="facebook" />
        </MDBCol>
        <MDBCol className="col-3">
          <h5>Find us here ❣️</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.21722940248!2d-122.15130702796334!3d37.41331444145766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2zzpzOrM6_z4XOvc-EzrXOvSDOks65zr_PhSwgzprOsc67zrnPhs-Mz4HOvc65zrEsIM6Xzr3Pic68zq3Ovc61z4IgzqDOv867zrnPhM61zq_Otc-C!5e0!3m2!1sel!2sgr!4v1683709326273!5m2!1sel!2sgr"
            style={{ width: "20vw" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </MDBCol>
      </MDBRow>
      <BackToTopButton />
    </div>
  );
}

export default Home;
