import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const MyCardOverview = ({ id, image, title, onOpen }) => {
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
      </CardActions>
    </Card>
  );
};

export default MyCardOverview;
