import React, { useState } from "react";
import TextField from "../TextField";

function nameIsRequired(val) {
  return val.length > 0 ? "" : "Enter an username/email ";
}

function passwordIsRequired(val) {
  return val.length > 0 ? "" : "Enter your password ";
}

function isEmail(val) {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
    val
  )
    ? ""
    : "Email is not valid";
}

const defaultValues = {
  name: "",
  password: "",
};
const defaultErrors = {
  name: [],
  password: [],
};

export default function Login() {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  return (
    <div>
      <TextField
        label="Name or email address"
        name="name"
        value={values.name}
        onChange={(val) => {
          const name = val;
          setValues((prev) => ({ ...prev, name }));
        }}
        validations={[nameIsRequired]}
        errors={errors.name}
        setErrors={setErrors}
      />
      <TextField
        label="Password"
        name="password"
        value={values.password}
        onChange={(val) => {
          const password = val;
          setValues((prev) => ({ ...prev, password }));
        }}
        validations={[passwordIsRequired]}
        errors={errors.password}
        setErrors={setErrors}
      />
    </div>
  );
}
