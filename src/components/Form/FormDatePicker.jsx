import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// eslint-disable-next-line react/prop-types
const FormDatePicker = ({ name, control }) => {
  return (
    <Controller
      control={control}
      name={name || "date"}
      rules={{ required: true }}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={field.value}
              inputRef={field.ref}
              onChange={(date) => {
                field.onChange(date);
              }}
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default FormDatePicker;
