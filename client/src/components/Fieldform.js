import React from "react";
import { useFormik } from "formik";
import { formSchema } from "../schemas";

const initialValues = {
  diseaseName: "",
  description: "",
  symptoms: "",
  remedies: "",
  precaution: "",
  visual_content: "",
  emergency: "",
  contact_number: "",
};
const Fieldform = () => {
  const submitHandler = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "diseasename":  e.diseaseName,
      "description": e.description,
      "symptoms": e.symptoms,
      "remedies": e.remedies,
      "precaution": e.precaution,
      "visualcontent": e.visual_content,
      "emergency_contact": e.emergency,
      "general_contact": e.contact_number
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:9999/formdata", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }



  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        submitHandler(values);
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-3">
        <p class="text-center fw-bold fs-2">
          Enter Details about current Disease
        </p>

        <div class="form-row">
          <div class="form-group col-md-4 offset-md-4">
            DiseaseName:
            <textarea
              type="text"
              class="form-control"
              name="diseaseName"
              value={values.diseaseName}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={1}
            />
            {errors.diseaseName && touched.diseaseName ? (
              <small className="text-danger">{errors.diseaseName}</small>
            ) : null}
            <br></br>
          </div>

          <div class="form-group col-md-4 offset-md-4">
            Description:
            <textarea
              className="form-control"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.description && touched.description ? (
              <small className="text-danger">{errors.description}</small>
            ) : null}
            <br></br>
          </div>

          <div class="form-group col-md-4 offset-md-4">
            Symptoms:
            <textarea
              className="form-control"
              name="symptoms"
              value={values.symptoms}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.symptoms && touched.symptoms ? (
              <small className="text-danger">{errors.symptoms}</small>
            ) : null}
            <br></br>
          </div>

          <div class="form-group col-md-4 offset-md-4">
            Remedies:
            <textarea
              className="form-control"
              class="form-control"
              placeholder="Enter remedies and Basic remedies"
              name="remedies"
              value={values.remedies}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.remedies && touched.remedies ? (
              <small className="text-danger">{errors.remedies}</small>
            ) : null}
            <br></br>
          </div>

          <div class="form-group col-md-4 offset-md-4">
            Precaution:
            <textarea
              className="form-control"
              name="precaution"
              value={values.precaution}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.precaution && touched.precaution ? (
              <small className="text-danger">{errors.precaution}</small>
            ) : null}
            <br></br>
          </div>
          <div class="form-group col-md-4 offset-md-4">
            Visual-content:
            <textarea
              className="form-control"
              placeholder="Provide visual content video links here"
              name="visual_content"
              value={values.visual_content}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.visual_content && touched.visual_content ? (
              <small className="text-danger">{errors.visual_content}</small>
            ) : null}
            <br></br>
          </div>
          <div class="form-group col-md-4 offset-md-4">
            Emergency-Contact Numbers:
            <input
              className="form-control"
              name="emergency"
              type="number"
              value={values.emergency}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.emergency && touched.emergency ? (
              <small className="text-danger">{errors.emergency}</small>
            ) : null}
            <br></br>
          </div>

          <div class="form-group col-md-4 offset-md-4">
            General-Contact Numbers:
            <input
              className="form-control"
              name="contact_number"
              type="number"
              value={values.contact_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.contact_number && touched.contact_number ? (
              <small className="text-danger">{errors.contact_number}</small>
            ) : null}
            <br></br>
          </div>
          <div class="form-group col-md-6 offset-md-4">
            <button class="btn btn-primary">Submit</button>
          </div>

          {/* <div class="form-group  col-md-6 offset-md-4">
          <a routerLink="/signup">signup</a>
        </div> */}
        </div>
      </div>
    </form>
  );
};

export default Fieldform;
