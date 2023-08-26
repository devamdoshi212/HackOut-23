import React from "react";

export const Fileldform = () => {
  return (
    <div>
      {/* <p class="text-center">login</p> */}

      <div class="form-row">
        <div class="form-group col-md-4 offset-md-4">
          Email:
          <input type="email" class="form-control" />
          <br></br>

        </div>

        <div class="form-group col-md-4 offset-md-4">
          Password:
          <input type="password" class="form-control" />
          <br></br>
        </div>

        <div class="form-group col-md-6 offset-md-4">
          <button class="btn btn-primary">Login</button>
        </div>

        <div class="form-group  col-md-6 offset-md-4">
          <a routerLink="/signup">signup</a>
        </div>
      </div>
    </div>
  );
};
