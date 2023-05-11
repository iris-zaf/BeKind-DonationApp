import React from "react";

import Carousel from "better-react-carousel";

import {
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

function Home() {
  return (
    <div style={{ backgroundColor: "#14213d" }}>
      <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            width="100%"
            src="https://images.pexels.com/photos/6995179/pexels-photo-6995179.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://images.pexels.com/photos/7345406/pexels-photo-7345406.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image3"
          />
        </Carousel.Item>
      </Carousel>

      <MDBRow
        className="row-cols-1 row-cols-md-3 g-4"
        style={{ marginTop: "10em" }}
      >
        <MDBCol>
          <MDBCard className="d-flex justify-content-center align-items-center">
            <MDBIcon
              fas
              icon="hands-holding "
              className=" mt-4 "
              size="3x"
              position="top"
            ></MDBIcon>
            <MDBCardBody style={{ backgroundColor: "#e5e5e5" }}>
              <MDBCardTitle>Support 50+ nonprofits</MDBCardTitle>
              <MDBCardText>
                Choose from over 50 charities that are making a big impact on
                health, children,animals, the environment, education and more
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            style={{ backgroundColor: "#e5e5e5" }}
            className="d-flex justify-content-center align-items-center"
          >
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
          <MDBCard className="justify-content-center align-items-center">
            <MDBIcon
              fas
              icon="people-carry "
              className=" mt-4 "
              size="3x"
              position="top"
            ></MDBIcon>
            <MDBCardBody style={{ backgroundColor: "#e5e5e5" }}>
              <MDBCardTitle>Help Yourself While Helping Others</MDBCardTitle>
              <MDBCardText>
                Donating for a good cause keeps you motivated and feeling good🤗
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow
        className=" row-cols-lg-2 row-cols-lg-2 gx-2"
        style={{
          marginTop: "10em",
          display: "flex",
        }}
      >
        <MDBCol
          className="col-6 "
          style={{
            justifyContent: "space-between",
          }}
        >
          <MDBCard
            style={{
              backgroundColor: "transparent",
            }}
            className="d-flex justify-content-center align-items-center "
          >
            <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
            <MDBInput
              type="email"
              id="form4Example2"
              wrapperClass="mb-4"
              label="Email address"
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form4Example3"
              rows={4}
              label="Message"
            />

            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form4Example4"
              label="Send me a copy of this message"
              defaultChecked
            />

            <MDBBtn className="button-1 " type="submit" block>
              Stay in touch
            </MDBBtn>
          </MDBCard>
        </MDBCol>
        <MDBCol style={{ justifyContent: "space-between" }} className="col-5">
          <MDBCard
            style={{
              backgroundColor: "transparent",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <h5 style={{ color: "white" }}> We are here ❣️</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.21722940248!2d-122.15130702796334!3d37.41331444145766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2zzpzOrM6_z4XOvc-EzrXOvSDOks65zr_PhSwgzprOsc67zrnPhs-Mz4HOvc65zrEsIM6Xzr3Pic68zq3Ovc61z4IgzqDOv867zrnPhM61zq_Otc-C!5e0!3m2!1sel!2sgr!4v1683709326273!5m2!1sel!2sgr"
              style={{ width: "40vw" }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Home;
