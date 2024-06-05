import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const MyCardDetail = ({ image, title, description, weeks, date }) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="course"
          sx={{
            height: {
              xs: 400,
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
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {weeks} weeks
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyCardDetail;
