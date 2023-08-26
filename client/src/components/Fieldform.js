import React from "react";
const Fieldform = () => {
  return (
    <div className="mt-3">
      <p class="text-center fw-bold fs-2">
        Enter Details about current Disease
      </p>

      <div class="form-row">
        <div class="form-group col-md-4 offset-md-4">
          DiseaseName:
          <input type="email" class="form-control" />
          <br></br>
        </div>

        <div class="form-group col-md-4 offset-md-4">
          Description:
          <textarea className="form-control"></textarea>
          <br></br>
        </div>

        <div class="form-group col-md-4 offset-md-4">
          Symptoms:
          <textarea className="form-control"></textarea>
          <br></br>
        </div>

        <div class="form-group col-md-4 offset-md-4">
          Remedies:
          <textarea
            className="form-control"
            class="form-control"
            placeholder="Enter remedies and Basic remedies"
          ></textarea>
          <br></br>
        </div>

        <div class="form-group col-md-4 offset-md-4">
          Precaution:
          <textarea className="form-control"></textarea>
          <br></br>
        </div>
        <div class="form-group col-md-4 offset-md-4">
          Visual-content:
          <textarea
            className="form-control"
            placeholder="provide visual video links here"
          ></textarea>
          <br></br>
        </div>
        <div class="form-group col-md-4 offset-md-4">
          Emergency-Contact Numbers:
          <textarea className="form-control"></textarea>
          <br></br>
        </div>

        <div class="form-group col-md-4 offset-md-4">
          General-Contact Numbers:
          <textarea className="form-control"></textarea>
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
  );
};

export default Fieldform;
