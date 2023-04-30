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
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-2">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <MDBIcon fas icon="hand-holding-heart " size="7x" />
                <h3 className="mt-1 mb-2 pb-1">Be Kind</h3>
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
                <MDBBtn className="mb-4 w-100 gradient-custom-2" type="submit">
                  Sign in
                </MDBBtn>
                <h5 className="small text-muted">
                  Don't have an account? <Link to="/register">Register</Link>
                </h5>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default Login;
