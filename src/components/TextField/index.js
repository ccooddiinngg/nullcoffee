import React, { useState, useRef } from "react";
import "./index.css";

export default function TextField({
  label,
  type,
  name,
  value,
  onChange,
  validations,
  errors,
  setErrors,
}) {
  const [focused, setFocused] = useState(false);

  const inputRef = useRef(null);

  function validate(validations) {
    setErrors((prev) => ({
      ...prev,
      [name]: validations
        .map((errorsFor) => errorsFor(value))
        .filter((error) => error.length > 0),
    }));
  }

  return (
    <div
      className={`form-field ${focused ? "is-focused" : ""} ${
        value.length > 0 ? "has-value" : ""
      } ${errors.length > 0 ? "invalid" : ""}`}
    >
      <div className="control">
        <label onClick={() => inputRef.current.focus()}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            validate(validations);
          }}
        />
      </div>

      <div className="has-error">
        {errors.length > 0 ? errors.join(", ") : ""}
      </div>
    </div>
  );
}
