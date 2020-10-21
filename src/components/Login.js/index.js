import React, { useState } from "react";
import TextField from "../TextField";
import "./index.css";

function isPassword(val) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(val)
    ? ""
    : `⚠️ Invalid Password. Must be at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.`;
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

export default function Login() {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  return (
    <div className="signin-container">
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
  );
}
