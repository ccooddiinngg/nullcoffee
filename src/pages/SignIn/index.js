import React, { useState } from "react";
import TextField from "../../components/TextField";
import Spacer from "../../components/Spacer";
import "./index.css";

function isPassword(val) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(val)
    ? ""
    : `⚠️ Invalid Password.`;
}

function isEmail(val) {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
    val
  )
    ? ""
    : "⚠️ Invalid email address.";
}

const defaultValues = {
  email: "",
  password: "",
};
const defaultErrors = {
  email: [],
  password: [],
};

export default function SignIn() {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  return (
    <div className="signin-container">
      <Spacer />
      <div className="signin-content">
        <TextField
          label="Email address"
          type="text"
          name="email"
          value={values.email}
          onChange={(email) => {
            setValues((prev) => ({ ...prev, email }));
          }}
          validations={[isEmail]}
          errors={errors.email}
          setErrors={setErrors}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={(password) => {
            setValues((prev) => ({ ...prev, password }));
          }}
          validations={[isPassword]}
          errors={errors.password}
          setErrors={setErrors}
        />
        <div className="signin-text">Forgot your password?</div>
        <div className="signin-btn">Sign in</div>
      </div>
      <Spacer />
    </div>
  );
}
