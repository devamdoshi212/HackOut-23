import React, { useState } from "react";
import "./Login.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
// import { useFormik } from "formik";
import { useFormik } from "formik";
import { signupSchema } from "./../../schemas";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  con_password: "",
};

const Login = (props) => {
  const [sumbiterror, setsumbiterror] = useState(false);
  const history = useHistory();
  const submitHandler = async (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: e.name,
      email: e.email,
      password: e.password,
      con_password: e.con_password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:9999/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.rcode === 200) {
          setsumbiterror(false);
        } else {
          setsumbiterror(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const RegisterHandler = () => {
    if (sumbiterror) {
    } else {
      history.replace("/admin/login");
      // <Redirect to="/admin/login"></Redirect>;
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        submitHandler(values);
        action.resetForm();
      },
    });

  return (
    <div className="bodydiv">
      <div class="container mt-5">
        <div class="row ">
          <div class="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
            <div class="panel border bg-white  main">
              <div class="panel-heading">
                <h3 class="pt-3 font-weight-bold">SignUp</h3>
              </div>
              <div class="panel-body p-3">
                <form onSubmit={handleSubmit}>
                  <div class="form-group py-2">
                    <div class="input-field">
                      <span class="far fa-user p-2"></span>
                      <AiOutlineUser />
                      <input
                        type="text"
                        placeholder=" Username"
                        required
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.name && touched.name ? (
                      <small className="text-danger">{errors.name}</small>
                    ) : null}

                    <div class="input-field mt-2">
                      <span class="far fa-user p-2"></span>
                      <AiOutlineMail />
                      <input
                        type="text"
                        placeholder=" Email"
                        required
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  {errors.email && touched.email ? (
                    <small className="text-danger">{errors.email}</small>
                  ) : null}
                  <div class="form-group py-1 pb-2">
                    <div class="input-field">
                      <span class="fas fa-lock px-2"></span>
                      <RiLockPasswordLine />
                      <input
                        type="password"
                        placeholder=" Enter your Password"
                        required
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.password && touched.password ? (
                      <small className="text-danger">{errors.password}</small>
                    ) : null}
                    <div class="input-field mt-2">
                      <span class="fas fa-lock px-2"></span>
                      <RiLockPasswordLine />
                      <input
                        type="password"
                        placeholder="confirm password"
                        required
                        name="con_password"
                        value={values.con_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <button class="btn bg-white text-muted">
                        <span class="far fa-eye-slash"></span>
                      </button>
                    </div>
                    {errors.con_password && touched.con_password ? (
                      <small className="text-danger">
                        {errors.con_password}
                      </small>
                    ) : null}{" "}
                  </div>
                  {/* <div class="form-inline">
                  <input type="checkbox" name="remember" id="remember" />
                  <label for="remember" class="text-muted ">
                    Remember me
                  </label>
                  <a href="#" id="forgot" class="font-weight-bold forgot">
                    Forgot password ?
                  </a>
                </div> */}
                  <button
                    class="btn btn-primary btn-block mt-4 w-100"
                    type="submit"
                    onClick={RegisterHandler}
                  >
                    Sign up
                  </button>
                  <div className="text-center ">
                    {sumbiterror ? (
                      <p className="text-danger">Register failed!!</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="text-center pt-4 text-muted fw-normal">
                    Already have an account?
                    {/* <button onClick={props.onClick} className="btn btn-secondary">
                    login
                  </button> */}
                  </div>
                </form>
              </div>
              {/* <div class="mx-3 my-2 py-2 bordert">
                    <div class="text-center py-3"> <a href="https://wwww.facebook.com" target="_blank" class="px-2"> <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt=""> </a> <a href="https://www.google.com" target="_blank" class="px-2"> <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""> </a> <a href="https://www.github.com" target="_blank" class="px-2"> <img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" alt=""> </a> </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
