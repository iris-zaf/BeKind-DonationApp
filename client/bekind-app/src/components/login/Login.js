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
import "../donationSearch/donationSearch.css";
import "../login/login.css";
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
      navigate("/");
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
      <MDBContainer className="my-2 gradient-form " fluid>
        <MDBRow>
          <MDBCol sm="6">
            <div className=" flex-column col-4  login-card">
              <div className="text-center">
                <MDBIcon
                  fas
                  icon="hand-holding-heart "
                  className="mb-4 mt-4 "
                  size="2x"
                />

                <figcaption className="blockquote-footer mb-5">
                  “No one has ever become poor from giving.” —{" "}
                  <cite title="Source Title">Anne Frank</cite>
                </figcaption>
              </div>

              <p>Login to your account</p>

              <MDBInput
                wrapperClass="mb-3"
                label="Email address"
                id="form1"
                type="email"
                {...register("email", {
                  required: "Email is required.",
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
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
              <div className="text-center mb-5 pb-1">
                <button type="submit" className="cta bg-">
                  Sign in
                </button>
                <h5 className="small  mb-5 ">
                  Don't have an account? <Link to="/register">Register</Link>
                </h5>
                <p>Follow our latest stories and new ways to donate:</p>
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

          <MDBCol sm="6" className="d-none d-sm-block px-0">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_6ejDeXulHz.json"
              background="transparent"
              speed="1"
              style={{ width: " 500px", height: "500px" }}
              loop
              autoplay
            ></lottie-player>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default Login;
