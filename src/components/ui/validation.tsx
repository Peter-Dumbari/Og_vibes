import React from "react";
import { InputFieldComponent } from "./inputComponent";
import { CheckIcon } from "@heroicons/react/16/solid";

const Validation = () => {
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const userAccess = [
    "Access buying event tickets",
    "Access to Post and react on blogs",
    "Access to register an artist account",
  ];
  return (
    <div className="validation">
      <div className="login">
        <h3>Sign In</h3>

        <p>welcome back! sign in to your account</p>

        <form autoComplete="off" action="" className="form">
          <InputFieldComponent
            type="text"
            placeholder="username or email address*"
            value={loginData.username}
            onChange={handleChange}
            name="username"
            id="username"
            label="Username or Email Address"
            error=""
          />
          <InputFieldComponent
            type="password"
            placeholder="password*"
            value={loginData.password}
            onChange={handleChange}
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
          <div className="btn_container">
            <button className="default_btn">Login</button>
          </div>
        </form>
      </div>
      <div className="register">
        <h3>Create new account</h3>
        <p>create your very own Ogvibes account</p>

        <form action="" className="form">
          <InputFieldComponent
            type="text"
            placeholder="username or email address*"
            value={loginData.username}
            onChange={handleChange}
            name="username"
            id="username"
            label="Username or Email Address"
            error=""
          />

          <button className="default_btn">Register</button>

          <div className="ads">
            <h5>Sign Up Today and You Will Be Able To:</h5>

            <div className="list">
              {userAccess.map((item, index) => (
                <div key={index} className="items">
                  <CheckIcon className="icon" />
                  <h6>{item}</h6>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>

      <div className="or_cont">
        <p>Or</p>
      </div>
    </div>
  );
};

export default Validation;
