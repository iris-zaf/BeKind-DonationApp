import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../components/donationSearch/donationSearch.css";
function Login(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    reset({
      email: "",
      password: "",
    });
    const result = await PostLogin(userData);
    if (result) {
      props.onLogin(true);
      navigate("/register");
    }
  };

  const PostLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/login", data);
      // console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data);
        alert("Logged in Successfully");
        return true;
      }
    } catch (error) {
      alert("Unable to Login...");
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MDBContainer className="my-2 gradient-form ">
        <MDBRow className="mx-2 d-flex justify-content-center align-items-center">
          <MDBCol col="9">
            <div className="d-flex flex-column col-8 ms-4">
              <div className="text-center">
                <MDBIcon
                  fas
                  icon="hand-holding-heart "
                  className="mb-4 mt-4 "
                  size="4x"
                />

                <figcaption className="blockquote-footer mb-5">
                  “No one has ever become poor from giving.” —{" "}
                  <cite title="Source Title">Anne Frank</cite>
                </figcaption>
              </div>

              <p>Login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                {...register("email", {
                  required: "Email is required.",
                })}
              />
              {errors.password && (
                <p className="errorMsg">{errors.password.message}</p>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 5 characters.",
                  },
                })}
              />
              {errors.password && (
                <p className="errorMsg">{errors.password.message}</p>
              )}
              <div className="text-center pt-1 mb-5 pb-1">
                <button className="button-1 mb-4 w-100" type="submit">
                  Sign in
                </button>
                <h5 className="small text-muted mb-5 ">
                  Don't have an account? <Link to="/register">Register</Link>
                </h5>
                <h5>Follow our latest stories and new ways to donate below:</h5>
                <div className="d-flex justify-content-center">
                  {" "}
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-2"
                    style={{ color: "black" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </MDBBtn>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-2"
                    style={{ color: "black" }}
                  >
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-2"
                    style={{ color: "black" }}
                  >
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="2" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="sideImage"
              ></img>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default Login;
