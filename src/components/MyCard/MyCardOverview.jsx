import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useDeleteCourse from "../../hooks/useDeleteCourse";

// eslint-disable-next-line react/prop-types
const MyCardOverview = ({ id, image, title, onOpen }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const deleteCourse = useDeleteCourse();
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea onClick={() => onOpen(id)}>
        <CardMedia
          component="img"
          image={image}
          alt="course"
          sx={{
            height: {
              xs: 400,
              md: 250,
              lg: 300,
            },
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={700}
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          sx={{
            fontWeight: 800,
            backgroundColor: "secondary.main",
          }}
          onClick={() => onOpen(id)}
        >
          View detail
        </Button>
        {auth?.user && (
          <Button
            size="small"
            color="primary"
            sx={{
              fontWeight: 800,
              backgroundColor: "secondary.main",
            }}
            onClick={() => navigate(`edit/${id}`)}
          >
            Edit
          </Button>
        )}
        {auth?.user && (
          <Button
            size="small"
            color="primary"
            sx={{
              fontWeight: 800,
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                color: "red",
                backgroundColor: "text.primary",
              },
            }}
            onClick={() => deleteCourse(id)}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default MyCardOverview;
