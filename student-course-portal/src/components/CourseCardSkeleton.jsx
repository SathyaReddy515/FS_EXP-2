import { Card, Skeleton } from "@mui/material";

export default function CourseCardSkeleton() {
  return (
    <Card sx={{ borderRadius: 4, overflow: "hidden" }}>
      <Skeleton variant="rectangular" height={160} />
      <div style={{ padding: 16 }}>
        <Skeleton height={30} width="80%" />
        <Skeleton height={20} width="95%" />
        <Skeleton height={20} width="70%" />
        <Skeleton height={30} width="60%" style={{ marginTop: 10 }} />
        <Skeleton height={40} width="100%" style={{ marginTop: 10 }} />
      </div>
    </Card>
  );
}
