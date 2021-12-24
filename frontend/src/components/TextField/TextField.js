import React from "react";
import TextField from "@mui/material/TextField";

export default function Field(props) {
  const {
    type = "text",
    value,
    onChange,
    id,
    label,
    defaultValue,
    required = false,
    fullWidth = true,
    disabled = false,
    name,
    placeholder = "Please Enter",
  } = props;
  const _onChange = (e) => {
    const value = e.target.value;
    const n = e.target.name;

    onChange && onChange(n, value);
  };
  return (
    <div>
      <TextField
        required={required}
        type={type}
        value={value}
        id={id}
        label={label}
        fullWidth={fullWidth}
        disabled={disabled}
        name={name}
        onChange={_onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
