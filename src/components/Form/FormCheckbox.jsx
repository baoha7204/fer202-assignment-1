/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

const FormCheckbox = ({ name, control, label }) => {
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field: props }) => (
            <Checkbox
              {...props}
              checked={props.value}
              onChange={(e) => props.onChange(e.target.checked)}
            />
          )}
        />
      }
      label={label}
    />
  );
};

export default FormCheckbox;
