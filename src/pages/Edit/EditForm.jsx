import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import useEditCourse from "./hooks/useEditCourse";
import FormInputText from "../../components/Form/FormInputText";
import FormCheckbox from "../../components/Form/FormCheckbox";
import FormDatePicker from "../../components/Form/FormDatePicker";

const EditForm = () => {
  const location = useLocation();
  const mode = useMemo(
    () => (location.pathname === "/admin/edit" ? "edit" : "create"),
    [location.pathname]
  );
  const [handleSubmit, isSubmitting, control] = useEditCourse(
    mode,
    location?.state
  );

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
        name="title"
        outsideLabel="Title"
        required
        fullWidth
        id="title"
        label="Title"
        autoFocus
      />
      <FormInputText
        control={control}
        name="image"
        outsideLabel="Image URL"
        required
        fullWidth
        id="image"
        label="Image URL"
      />
      <FormInputText
        control={control}
        name="description"
        outsideLabel="Description"
        required
        multiline
        rows={4}
        id="description"
        label="Write your description"
      />
      <FormInputText
        control={control}
        name="weeks"
        outsideLabel="Weeks"
        inputProps={{ type: "number" }}
        required
        id="weeks"
        label="Number of weeks (at least 1 week above)"
      />
      <FormCheckbox name="active" control={control} label="Active" />
      <FormDatePicker control={control} name="date" />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={isSubmitting}
      >
        {mode === "edit" ? "Edit" : "Create"}
      </Button>
    </Box>
  );
};

export default EditForm;
