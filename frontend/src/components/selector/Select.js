import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MultipleSelect(props) {
  const {
    input,
    id,
    labelId,
    onChange,
    value,
    multiple = false,
    label,
    autoWidth = true,
  } = props;

  return (
    <div>
      <Select
        id={id}
        labelId={labelId}
        label={label}
        value={value}
        onChange={onChange}
        input={input}
        autoWidth={autoWidth}
        multiple={multiple}
      />
    </div>
  );
}
