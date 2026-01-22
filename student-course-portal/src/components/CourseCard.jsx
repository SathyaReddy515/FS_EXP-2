import {
  Card,
  CardContent,
  Typography,
  Chip,
  CardActions,
  Button,
  CardMedia,
  Rating,
  Stack,
} from "@mui/material";

export default function CourseCard({ course, onPreview, onEnroll }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
        overflow: "hidden",
        transition: "0.25s",
        ":hover": { transform: "translateY(-6px)", boxShadow: 6 },
      }}
    >
      <CardMedia component="img" height="160" image={course.image} alt={course.title} />

      <CardContent>
        <Typography variant="h6" fontWeight={800}>
          {course.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {course.description}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
          <Rating value={course.rating} precision={0.1} readOnly />
          <Typography variant="body2" fontWeight={700}>
            {course.rating}
          </Typography>
        </Stack>

        <div className="d-flex gap-2 flex-wrap mt-3">
          <Chip label={course.category} color="primary" size="small" />
          <Chip label={course.level} color="secondary" size="small" />
          <Chip label={course.duration} variant="outlined" size="small" />
        </div>
      </CardContent>

      <CardActions className="px-3 pb-3 d-flex justify-content-between">
        <Button size="small" variant="outlined" onClick={() => onPreview(course)}>
          Preview
        </Button>
        <Button size="small" variant="contained" onClick={() => onEnroll(course)}>
          Enroll
        </Button>
      </CardActions>
    </Card>
  );
}
