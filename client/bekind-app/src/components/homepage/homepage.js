import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SocialHands from "./social-care.gif";
import Idea from "./idea.gif";
import Kindness from "./kindness.gif";
import {
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBAccordion,
  MDBCheckbox,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import "../homepage/HomePage.css";
import "../popup/Popup.css";
import axios from "axios";
import Testimonials from "../homepage/Testimonials";
import BackToTopButton from "../homepage/BackToTop";

import instagram from "../homepage/instagram.png";
import facebook from "../homepage/facebook.png";
import twitter from "../homepage/icons8-twitter-50.png";
function Home(props) {
  const [recipient_email, setEmail] = useState("");
  const [displayPopUp, setDisplayPopUp] = useState(true);

  function sendMail() {
    if (recipient_email) {
      axios
        .post(`${process.env.REACT_APP_API_SERVER_ADDRESS}/send_email`, {
          recipient_email,
        })
        .then(() => alert("Message send successfully"))
        .catch((error) => console.log(error));
      return;
    }
    return alert("Fill in all the fields to continue");
  }

  const closePopUp = () => {
    localStorage.setItem("seenPopUp", true);
    //setting state to false to not display pop-up
    setDisplayPopUp(false);
  };

  //useEffect to trigger on first render and check if in the localStorage
  useEffect(() => {
    let returningUser = localStorage.getItem("seenPopUp");

    setDisplayPopUp(!returningUser);
  }, []);
  return (
    <div className="smallCardsCont">
      <MDBContainer fluid className="p-0">
        <div class="demo-content">
          <div className="demo-wrap">
            <div className="text-wrap">
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
            </div>
          </div>
        </div>
      </MDBContainer>
      <MDBRow className="section">
        <MDBCol>
          {" "}
          <MDBCard className="box">
            <MDBCardBody>
              {" "}
              <img
                src={SocialHands}
                alt="social-care"
                style={{
                  width: "4em",
                  borderRadius: "25px",
                  marginBottom: "1em",
                }}
              />
              <MDBCardTitle>Support 50+ nonprofits</MDBCardTitle>
              <MDBCardText>
                Choose from over 50 charities that are making a big impact on
                health, children,animals, the environment, education and more
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className=" box">
            <MDBCardBody>
              {" "}
              <img
                src={Idea}
                alt="social-care"
                style={{
                  width: "4em",
                  borderRadius: "25px",
                  marginBottom: "1em",
                }}
              />
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
            <MDBCardBody>
              <img
                src={Kindness}
                alt="social-care"
                style={{
                  width: "4em",
                  borderRadius: "25px",
                  marginBottom: "1em",
                }}
              />
              <MDBCardTitle>
                Help Yourself <br></br> While Helping Others
              </MDBCardTitle>
              <MDBCardText>
                Donating for a good cause keeps you motivated and feeling good🤗
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
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
      <MDBRow style={{ backgroundColor: "rgb(249, 249, 249)" }}>
        <MDBCol>
          <MDBAccordion borderless initialActive={1} className="accordion-wrap">
            {" "}
            <h2>Frequently asked questions</h2>
            <MDBAccordionItem
              collapseId={1}
              headerTitle="Who are we?"
              className="accordion"
            >
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={2}
              headerTitle="What is the mission?"
              className="accordion"
            >
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={3}
              headerTitle="How can I help?"
              className="accordion"
            >
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={4}
              headerTitle="Where are we located?"
              className="accordion"
            >
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCol>
        <MDBCol className="m-5 heartHands">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="heart-hands"
            style={{ width: "100%" }}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className=" p-5 section-footer mt-5">
        <MDBCol className="footer-list col-6">
          <ul>
            <li>
              {" "}
              <Link to="/" className="text-dark list">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/search" className="text-dark list">
                Search for a donation
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-dark list">
                My donation
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-dark list">
                About
              </Link>
            </li>
            <li>
              <img src={instagram} className="socialIcons" alt="instagram" />
              <img src={facebook} className="socialIcons" alt="facebook" />
              <img src={twitter} className="socialIcons" alt="facebook" />
            </li>
          </ul>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className=" justify-content-center align-items-center p-4 contactCard "
            style={{ background: " #898d9d66", backdropFilter: "blur(10px)" }}
          >
            <MDBCardTitle>Subscribe to our newsletter✉️</MDBCardTitle>
            <MDBInput
              style={{ background: "white" }}
              type="email"
              id="form4Example2"
              wrapperClass="mb-4 mt-3"
              label="Email address..."
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

        {/* <MDBCol className="map">
          <h5>Find us here ❣️</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.21722940248!2d-122.15130702796334!3d37.41331444145766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2zzpzOrM6_z4XOvc-EzrXOvSDOks65zr_PhSwgzprOsc67zrnPhs-Mz4HOvc65zrEsIM6Xzr3Pic68zq3Ovc61z4IgzqDOv867zrnPhM61zq_Otc-C!5e0!3m2!1sel!2sgr!4v1683709326273!5m2!1sel!2sgr"
            style={{ width: "20vw" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </MDBCol> */}
      </MDBRow>
      <BackToTopButton />
      <div>
        {/* conditional rendering, if displayPopUp is truthy we will show the modal */}
        {displayPopUp && (
          <div
            open={true}
            // once pop-up will close "closePopUp" function will be executed
            onClose={closePopUp}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
          >
            {/* in the line below we pass our custom styles object to the modal via 'sx' prop*/}
            <div className="popup">
              <div className="popup-inner">
                {" "}
                <h2>Terms of use</h2>
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_ZygRYHjKiC.json"
                  background="transparent"
                  speed="1"
                  style={{ width: " 100px", height: "100px" }}
                  loop
                  autoplay
                ></lottie-player>
                {props.children}
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I agree with all the statements in"
                />
                <a href="#">Terms of use</a>
                <button className="x" onClick={closePopUp}>
                  ❌
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
