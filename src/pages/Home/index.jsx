import { Grid } from "@mui/material";
import useModal from "../../hooks/useModal";
import MyModal from "../../components/MyModal";
import MyCardOverview from "../../components/MyCard/MyCardOverview";
import useFetchCourses from "../../hooks/useFetchCourses";

const HomePage = () => {
  const { courses, handleDeleteCourse } = useFetchCourses();
  const { detail, open, openModal, closeModal } = useModal();

  return (
    <Grid container spacing={5}>
      {courses.map((course) => (
        <Grid
          key={course.id}
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <MyCardOverview
            onOpen={openModal}
            course={course}
            onDeleteCourse={handleDeleteCourse}
          />
        </Grid>
      ))}
      {open && detail && (
        <MyModal
          open={open}
          onClose={closeModal}
          course={courses.find((course) => course.id === detail)}
        />
      )}
    </Grid>
  );
};

export default HomePage;
