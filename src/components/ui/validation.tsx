import React from "react";
import InputFieldComponent from "./inputComponent";

const Validation = () => {
  return (
    <div className="validation">
      <div className="login">
        <h3>Sign In</h3>

        <p>welcome back! sign in to your account</p>

        <form action="" className="sign_in_form">
          <InputFieldComponent
            type="text"
            placeholder="username or email address*"
            value=""
            onChange={() => {}}
            name="username"
            id="username"
            label="Username or Email Address"
            error=""
          />
        </form>
      </div>
      <div className="register">
        <h3>Create new account</h3>
        <p>create your very own Ogvibes account</p>
      </div>

      <div className="or_cont">
        <p>Or</p>
      </div>
    </div>
  );
};

export default Validation;
