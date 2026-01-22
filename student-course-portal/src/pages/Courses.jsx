import { useContext, useEffect, useMemo, useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import CourseCardSkeleton from "../components/CourseCardSkeleton";
import { AppContext } from "../context/AppContext";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Chip,
  TextField,
  Rating,
} from "@mui/material";

export default function Courses() {
  const { enrollCourse } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const [preview, setPreview] = useState(null);

  const categories = ["All", "Web Dev", "AI", "Design", "Business"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  // ✅ Fake API load delay
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "All" ? true : c.category === category;
      const matchLevel = level === "All" ? true : c.level === level;

      return matchSearch && matchCategory && matchLevel;
    });
  }, [search, category, level]);

  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-1">Explore Courses</h2>
          <p className="text-muted mb-0">
            Search, preview, and enroll instantly 🚀
          </p>
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <TextField
            size="small"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="mt-4 d-flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            color={category === cat ? "primary" : "default"}
            onClick={() => setCategory(cat)}
          />
        ))}
      </div>

      <div className="mt-3 d-flex flex-wrap gap-2">
        {levels.map((lv) => (
          <Chip
            key={lv}
            label={lv}
            color={level === lv ? "secondary" : "default"}
            onClick={() => setLevel(lv)}
          />
        ))}
      </div>

      {/* Courses grid */}
      <div className="row g-4 mt-2">
        {loading ? (
          [...Array(6)].map((_, i) => (
            <div className="col-md-4" key={i}>
              <CourseCardSkeleton />
            </div>
          ))
        ) : filtered.length === 0 ? (
          <div className="col-12 text-center text-muted py-5">
            No courses found 😕
          </div>
        ) : (
          filtered.map((course) => (
            <div className="col-md-4" key={course.id}>
              <CourseCard
                course={course}
                onPreview={setPreview}
                onEnroll={enrollCourse}
              />
            </div>
          ))
        )}
      </div>

      {/* Preview Modal */}
      <Dialog
        open={!!preview}
        onClose={() => setPreview(null)}
        fullWidth
        maxWidth="sm"
      >
        {preview && (
          <>
            {/* Modal Header */}
            <DialogTitle sx={{ fontWeight: 900 }}>
              {preview.title}
            </DialogTitle>

            <DialogContent>
              {/* Image */}
              <img
                src={preview.image}
                alt={preview.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "16px",
                }}
              />

              {/* Description */}
              <p className="text-muted">{preview.description}</p>

              {/* Rating */}
              <div className="d-flex align-items-center gap-2 mb-3">
                <Rating value={preview.rating} precision={0.1} readOnly />
                <span className="fw-bold">{preview.rating}</span>
              </div>

              {/* Chips */}
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Chip label={preview.category} color="primary" />
                <Chip label={preview.level} color="secondary" />
                <Chip label={preview.duration} variant="outlined" />
              </div>

              {/* Extra info */}
              <div className="p-3 rounded-4 bg-light border">
                <h6 className="fw-bold mb-2">Instructor</h6>
                <p className="mb-0">{preview.instructor}</p>

                <hr />

                <h6 className="fw-bold mb-2">What you'll learn</h6>
                <ul className="mb-0">
                  <li>Core concepts with real examples</li>
                  <li>Hands-on practice tasks</li>
                  <li>Mini project at the end</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="d-flex justify-content-end gap-2 mt-4">
                <Button variant="outlined" onClick={() => setPreview(null)}>
                  Close
                </Button>

                <Button
                  variant="contained"
                  onClick={() => {
                    enrollCourse(preview);
                    setPreview(null);
                  }}
                >
                  Enroll Now
                </Button>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}
