import React from "react";
import InputFieldComponent from "./inputComponent";

const Validation = () => {
  return (
    <div className="validation">
      <div className="login">
        <h3>Sign In</h3>

        <p>welcome back! sign in to your account</p>

        <form action="" className="form">
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
          <InputFieldComponent
            type="password"
            placeholder="password*"
            value=""
            onChange={() => {}}
            name="password"
            id="password"
            label="password"
            error=""
          />

          <div className="pass_reset">
            <div className="flex items-center gap-2">
              <InputFieldComponent
                type="checkbox"
                placeholder=""
                value=""
                onChange={() => {}}
                name="remember"
                id="remember"
                label=""
                error=""
              />
              <p className="text-sm">remember </p>
            </div>

            <p className="text-sm forgot_pass">forgot password?</p>
          </div>

          <button className="default_btn">sign in</button>
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
