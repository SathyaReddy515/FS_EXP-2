import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BoltIcon from "@mui/icons-material/Bolt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const featured = useMemo(() => courses.slice(0, 4), []);

  const goSearch = () => {
    navigate("/courses");
  };

  return (
    <div>
      {/* ✅ HERO */}
      <section className="landing-hero">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="badge hero-badge mb-3">
                🚀 LearnSphere • Student Course Portal
              </div>

              <h1 className="display-5 fw-bold text-white">
                Learn <span className="text-warning">smarter</span>. Track
                progress. Earn certificates.
              </h1>

              <p className="lead text-white-50 mt-3">
                A modern student course management portal built with{" "}
                <b>Bootstrap</b> + <b>Material UI</b>.
              </p>

              {/* ✅ Search (FIXED ALIGNMENT) */}
              <div className="hero-search mt-4">
                <div className="hero-search-input">
                  <TextField
                    fullWidth
                    size="medium"
                    placeholder="Search courses like React, Python, UI/UX..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    sx={{
                      background: "rgba(255,255,255,0.92)",
                      borderRadius: 3,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <Button
                  className="hero-search-btn"
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: 3 }}
                  onClick={goSearch}
                >
                  Search
                </Button>
              </div>

              {/* ✅ CTA buttons */}
              <div className="d-flex gap-3 flex-wrap mt-4">
                <Button
                  component={Link}
                  to="/courses"
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: 3, px: 4 }}
                >
                  Explore Courses
                </Button>

                <Button
                  component={Link}
                  to="/register"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                  }}
                >
                  Join Free
                </Button>
              </div>

              {/* ✅ Mini stats */}
              <div className="d-flex gap-3 flex-wrap mt-4">
                {[
                  { k: "50+", v: "Courses" },
                  { k: "4.8⭐", v: "Avg Rating" },
                  { k: "2k+", v: "Students" },
                ].map((s) => (
                  <div key={s.v} className="hero-stat">
                    <div className="hero-stat-k">{s.k}</div>
                    <div className="hero-stat-v">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Right visual card */}
            <div className="col-lg-5">
              <Paper className="hero-glass p-4" elevation={0}>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Today’s Dashboard</h5>
                  <Chip label="LIVE UI" color="success" size="small" />
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Weekly streak</span>
                    <b>6 days 🔥</b>
                  </div>
                  <div className="progress" style={{ height: 10 }}>
                    <div
                      className="progress-bar"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-4 border bg-white">
                  <div className="d-flex align-items-center gap-3">
                    <Avatar>S</Avatar>
                    <div>
                      <div className="fw-bold">Student Portal</div>
                      <div className="text-muted small">
                        Profile • Courses • Certificates
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 d-grid">
                  <Button
                    component={Link}
                    to="/my-courses"
                    variant="contained"
                    sx={{ borderRadius: 3 }}
                  >
                    Open Dashboard
                  </Button>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FEATURED COURSES */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <div>
            <h3 className="fw-bold mb-1">🔥 Featured Courses</h3>
            <p className="text-muted mb-0">Top picks curated for students.</p>
          </div>

          <Button
            component={Link}
            to="/courses"
            variant="outlined"
            sx={{ borderRadius: 3 }}
          >
            View all courses →
          </Button>
        </div>

        <div className="row g-4 mt-2">
          {featured.map((c) => (
            <div className="col-md-6 col-lg-3" key={c.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "0.25s",
                  ":hover": { transform: "translateY(-6px)", boxShadow: 8 },
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={c.image}
                  alt={c.title}
                />
                <CardContent>
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <Typography fontWeight={900}>{c.title}</Typography>
                    <Chip label={c.level} size="small" color="secondary" />
                  </div>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {c.category} • {c.duration}
                  </Typography>

                  <div className="d-flex align-items-center gap-2 mt-2">
                    <Rating
                      value={c.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <span className="fw-semibold">{c.rating}</span>
                  </div>

                  <div className="mt-3 d-grid">
                    <Button
                      component={Link}
                      to="/courses"
                      variant="contained"
                      size="small"
                      sx={{ borderRadius: 3 }}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ WHY CHOOSE US */}
      <section className="container pb-5">
        <h3 className="fw-bold mb-1">Why Choose LearnSphere?</h3>
        <p className="text-muted mb-4">
          Built like a real product portal — fast, clean and responsive.
        </p>

        <div className="row g-4">
          {[
            {
              icon: <BoltIcon />,
              title: "Fast UI + Smooth UX",
              desc: "Modern components with micro-interactions.",
            },
            {
              icon: <AutoGraphIcon />,
              title: "Progress Tracking",
              desc: "Track courses with progress bars and dashboard stats.",
            },
            {
              icon: <WorkspacePremiumIcon />,
              title: "Certificates",
              desc: "Completion certificates section included.",
            },
            {
              icon: <SupportAgentIcon />,
              title: "Student Friendly",
              desc: "Clear flow: browse → enroll → track → feedback.",
            },
          ].map((f) => (
            <div className="col-md-6 col-lg-3" key={f.title}>
              <Paper
                sx={{
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div className="feature-icon">{f.icon}</div>
                <div className="fw-bold mt-2">{f.title}</div>
                <div className="text-muted small mt-1">{f.desc}</div>
              </Paper>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ TESTIMONIALS */}
      <section className="container pb-5">
        <h3 className="fw-bold mb-4">Students Love It 💬</h3>

        <div className="row g-4">
          {[
            {
              name: "Aakash",
              msg: "Landing page looks like a real SaaS product! Dashboard is clean.",
            },
            {
              name: "Sneha",
              msg: "Loved the course cards and certificate section. Very modern UI.",
            },
            {
              name: "Rahul",
              msg: "Filters + preview + enroll. Best frontend project structure.",
            },
          ].map((t) => (
            <div className="col-md-4" key={t.name}>
              <Paper
                sx={{
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <Avatar>{t.name[0]}</Avatar>
                  <div>
                    <div className="fw-bold">{t.name}</div>
                    <Rating value={5} readOnly size="small" />
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">“{t.msg}”</p>
              </Paper>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="container pb-5">
        <h3 className="fw-bold mb-3">FAQs</h3>

        {[
          {
            q: "Is this website frontend-only?",
            a: "Yes. Enrollment, login and certificates are simulated using localStorage.",
          },
          {
            q: "Can I add backend later?",
            a: "Yes. You can connect APIs for login, course list, enrollments and feedback.",
          },
          {
            q: "Which frameworks are used?",
            a: "React + Bootstrap for layout + Material UI components for premium UI.",
          },
        ].map((x) => (
          <Accordion key={x.q} sx={{ borderRadius: 3, mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={800}>{x.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{x.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>

      {/* ✅ FINAL CTA */}
      <section className="landing-cta">
        <div className="container py-5 text-center text-white">
          <h2 className="fw-bold">Start learning today 🚀</h2>
          <p className="lead text-white-50 mb-4">
            Build your skills with trending courses and track your achievements.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              component={Link}
              to="/courses"
              variant="contained"
              size="large"
              sx={{ borderRadius: 3, px: 5 }}
            >
              Browse Courses
            </Button>

            <Button
              component={Link}
              to="/register"
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                borderRadius: 3,
                px: 5,
                borderColor: "rgba(255,255,255,0.55)",
              }}
            >
              Create Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
