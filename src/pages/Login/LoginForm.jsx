import { Box, Button } from "@mui/material";

import useLogin from "./hooks/useLogin";
import FormInputText from "../../components/Form/FormInputText";

const LoginForm = () => {
  const [handleSubmit, isSubmitting, control] = useLogin();

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <FormInputText
        control={control}
        name="user"
        outsideLabel="Login"
        required
        fullWidth
        id="user"
        label="Username"
        autoFocus
      />
      <FormInputText isPassword required control={control} name="password" />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={isSubmitting}
      >
        Sign in
      </Button>
    </Box>
  );
};

export default LoginForm;
