import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { Button, LinearProgress, Chip, Rating } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

export default function MyCourses() {
  const { enrolled, removeCourse } = useContext(AppContext);

  // generate fake progress (frontend-only)
  const progressMap = useMemo(() => {
    const map = {};
    enrolled.forEach((c) => {
      map[c.id] = Math.min(95, 20 + c.id * 18);
    });
    return map;
  }, [enrolled]);

  const completed = enrolled.filter((c) => progressMap[c.id] >= 80).length;

  return (
    <DashboardLayout title="My Learning Dashboard">
      {/* Top quick action */}
      <div className="d-flex justify-content-between flex-wrap gap-3 align-items-center mb-4">
        <p className="text-muted mb-0">
          Track your enrolled courses and progress 🎓
        </p>

        <Link className="btn btn-primary" to="/courses">
          + Enroll More Courses
        </Link>
      </div>

      {/* Summary cards */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="p-4 rounded-4 shadow-sm border bg-light h-100">
            <div className="d-flex align-items-center gap-2">
              <SchoolIcon />
              <h6 className="fw-bold mb-0">Enrolled Courses</h6>
            </div>
            <h2 className="fw-bold mt-2">{enrolled.length}</h2>
            <p className="text-muted small mb-0">
              Keep going — consistency is success.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 rounded-4 shadow-sm border bg-light h-100">
            <div className="d-flex align-items-center gap-2">
              <AutoGraphIcon />
              <h6 className="fw-bold mb-0">Completed</h6>
            </div>
            <h2 className="fw-bold mt-2">{completed}</h2>
            <p className="text-muted small mb-0">
              Courses above 80% count as completed.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 rounded-4 shadow-sm border bg-light h-100">
            <div className="d-flex align-items-center gap-2">
              <LocalFireDepartmentIcon />
              <h6 className="fw-bold mb-0">Weekly Streak</h6>
            </div>
            <h2 className="fw-bold mt-2">
              {Math.min(7, enrolled.length + 2)} 🔥
            </h2>
            <p className="text-muted small mb-0">
              (UI-only) Streak increases with activity.
            </p>
          </div>
        </div>
      </div>

      {/* Enrolled courses list */}
      <div className="mt-5">
        <h4 className="fw-bold mb-3">Enrolled Courses</h4>

        {enrolled.length === 0 ? (
          <div className="text-center p-5 rounded-4 border bg-light">
            <h4 className="fw-bold">No courses enrolled yet 😕</h4>
            <p className="text-muted mb-4">
              Start your learning journey by enrolling in courses.
            </p>
            <Link to="/courses" className="btn btn-primary btn-lg">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {enrolled.map((course) => (
              <div className="col-md-6" key={course.id}>
                <div className="p-4 rounded-4 shadow-sm border bg-white h-100">
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <div className="d-flex gap-3">
                      {/* ✅ Course image */}
                      <img
                        src={course.image}
                        alt={course.title}
                        style={{
                          width: "85px",
                          height: "85px",
                          objectFit: "cover",
                          borderRadius: "16px",
                        }}
                      />

                      <div>
                        <h5 className="fw-bold mb-1">{course.title}</h5>
                        <p className="text-muted mb-2 small">
                          Instructor: {course.instructor}
                        </p>

                        {/* ✅ Rating */}
                        <div className="d-flex align-items-center gap-2">
                          <Rating
                            value={course.rating}
                            precision={0.1}
                            readOnly
                            size="small"
                          />
                          <span className="small fw-semibold text-muted">
                            ({course.rating})
                          </span>
                        </div>

                        <div className="d-flex gap-2 flex-wrap mt-2">
                          <Chip
                            label={course.category}
                            size="small"
                            color="primary"
                          />
                          <Chip
                            label={course.level}
                            size="small"
                            color="secondary"
                          />
                          <Chip
                            label={course.duration}
                            size="small"
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={<DeleteOutlineIcon />}
                      onClick={() => removeCourse(course.id)}
                    >
                      Drop
                    </Button>
                  </div>

                  {/* Progress */}
                  <div className="mt-4">
                    <div className="d-flex justify-content-between">
                      <span className="fw-semibold small">Progress</span>
                      <span className="fw-semibold small">
                        {progressMap[course.id]}%
                      </span>
                    </div>

                    <LinearProgress
                      variant="determinate"
                      value={progressMap[course.id]}
                      sx={{ mt: 1, height: 10, borderRadius: 99 }}
                    />
                  </div>

                  {/* Status */}
                  <div className="mt-3">
                    {progressMap[course.id] >= 80 ? (
                      <span className="badge text-bg-success p-2 rounded-pill">
                        🎓 Completed
                      </span>
                    ) : (
                      <span className="badge text-bg-warning p-2 rounded-pill">
                        ⏳ In Progress
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
