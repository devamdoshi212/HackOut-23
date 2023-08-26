import React from "react";
import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";

const initialValues = {
  email: "",
  password: "",
};

const submitHandler = (e) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: e.email,
    password: e.password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:9999/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
const Login = (props) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        submitHandler(values);
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="bodydiv">
      <div className="conatainer mt-5">
        <div class="row ">
          <div class="offset-md-2 col-lg-4 col-md-6 offset-lg-4 offset-md-3">
            <div class="panel border bg-white  main">
              <div class="panel-heading">
                <h3 class="pt-3 font-weight-bold">Login</h3>
              </div>
              <div class="panel-body p-3">
                <form onSubmit={handleSubmit}>
                  <div class="form-group py-2">
                    <div class="input-field">
                      <span class="far fa-user p-2"></span>
                      <input
                        type="text"
                        placeholder="Enter your Email"
                        required
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.email && touched.email ? (
                      <small className="text-danger">{errors.email}</small>
                    ) : null}
                  </div>
                  <div class="form-group py-1 pb-2">
                    <div class="input-field">
                      <span class="fas fa-lock px-2"></span>
                      <input
                        type="password"
                        placeholder="Enter your Password"
                        required
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <button class="btn bg-white text-muted">
                        <span class="far fa-eye-slash"></span>
                      </button>
                    </div>
                    {errors.password && touched.password ? (
                      <small className="text-danger">{errors.password}</small>
                    ) : null}
                  </div>
                  {/* <div class="form-inline">
                    <input type="checkbox" name="remember" id="remember" />
                    <label for="remember" class="text-muted ">
                      Remember me
                    </label>
                    <a href="#" id="forgot" class="font-weight-bold forgot">
                      Forgot password?
                    </a>
                  </div> */}
                  <button class="btn btn-primary btn-block mt-4 w-100">
                    Login
                  </button>
                  <div class="text-center pt-4 text-muted fw-normal">
                    Don't have an account?{" "}
                    <Link to="/admin/register">Sign up</Link>
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
