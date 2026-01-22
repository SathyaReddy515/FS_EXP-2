import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GoogleIcon from "@mui/icons-material/Google";

export default function Register() {
  const { setToast } = useContext(AppContext);
  const navigate = useNavigate();

  const [showPwd, setShowPwd] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitRegister = () => {
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setToast({
        open: true,
        msg: "Please fill all fields",
        type: "warning",
      });
      return;
    }

    if (form.password.length < 6) {
      setToast({
        open: true,
        msg: "Password must be at least 6 characters",
        type: "warning",
      });
      return;
    }

    // UI only
    setToast({
      open: true,
      msg: "Registered successfully 🎉",
      type: "success",
    });

    navigate("/login");
  };

  return (
    <div className="auth-bg">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <Card sx={{ borderRadius: 5, boxShadow: 6 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={900} gutterBottom>
                  Create account ✨
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Join LearnSphere and start leveling up your skills.
                </Typography>

                <TextField
                  label="Full Name"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <TextField
                  label="Email"
                  fullWidth
                  sx={{ mb: 2 }}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <TextField
                  label="Password"
                  type={showPwd ? "text" : "password"}
                  fullWidth
                  sx={{ mb: 2 }}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => setShowPwd(!showPwd)}>
                        {showPwd ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    ),
                  }}
                />

                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  startIcon={<PersonAddAltIcon />}
                  sx={{ borderRadius: 3, py: 1.2 }}
                  onClick={submitRegister}
                >
                  Register
                </Button>

                <Divider sx={{ my: 3 }}>OR</Divider>

                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{ borderRadius: 3, py: 1.2 }}
                  onClick={() =>
                    setToast({
                      open: true,
                      msg: "Google signup (UI only)",
                      type: "info",
                    })
                  }
                >
                  Sign up with Google
                </Button>

                <div className="text-center mt-4">
                  <span className="text-muted">
                    Already have an account?{" "}
                  </span>
                  <Link to="/login" className="fw-bold text-decoration-none">
                    Login
                  </Link>
                </div>

                <div className="text-center mt-2">
                  <Link
                    to="/"
                    className="text-muted small text-decoration-none"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
