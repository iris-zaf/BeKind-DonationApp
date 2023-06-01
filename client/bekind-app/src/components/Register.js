import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../components/donationSearch/donationSearch.css";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    reset({
      name: "",
      email: "",
      password: "",
    });

    const res = await PostRegister(userData);
    if (res) {
      navigate("/");
    }
  };

  const PostRegister = async (data) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_SERVER_ADDRESS}/register`,
        data
      );
      alert("Registered  Successfully");
      return true;
    } catch (error) {
      alert("Unable to Register...");
      console.log(error);
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              id="form1"
              type="text"
              {...register("name", {
                required: "Name is required.",
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              {...register("email", {
                required: "Email is required.",
                minLength: {
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                },
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password should be at-least 5 characters.",
                },
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form4"
              type="password"
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree with all the statements in Terms of service"
                required
              />
            </div>
            <button
              className="button-1 mb-4  gradient-custom-4"
              size="lg"
              type="submit"
            >
              Register
            </button>
            <h5 className="small text-muted">
              You already have an account? <Link to="/login"> Login</Link>{" "}
            </h5>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
}

export default Register;
