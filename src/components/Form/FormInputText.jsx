import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import PasswordField from "../PasswordField";
import { STRING_EMPTY } from "../../constant/core";

// eslint-disable-next-line react/prop-types
const FormInputText = ({ name, control, isPassword = false, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) =>
        isPassword ? (
          <PasswordField
            helperText={error ? error.message : " "}
            error={!!error}
            variant="filled"
            onChange={onChange}
            value={value || STRING_EMPTY}
            showIcon
            {...rest}
          />
        ) : (
          <TextField
            helperText={error ? error.message : " "}
            error={!!error}
            variant="filled"
            onChange={onChange}
            value={value || STRING_EMPTY}
            {...rest}
          />
        )
      }
    />
  );
};

export default FormInputText;
