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
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";

export default function Login() {
  const { setToast } = useContext(AppContext);
  const navigate = useNavigate();

  const [showPwd, setShowPwd] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitLogin = () => {
  if (!form.email.trim() || !form.password.trim()) {
    setToast({ open: true, msg: "Please enter email & password", type: "warning" });
    return;
  }

  // ✅ frontend-only login
  localStorage.setItem("isLoggedIn", "true");

  setToast({ open: true, msg: "Login successful ✅", type: "success" });
  navigate("/courses");
};


  return (
    <div className="auth-bg">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <Card sx={{ borderRadius: 5, boxShadow: 6 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={900} gutterBottom>
                  Welcome back 👋
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Login to continue learning with LearnSphere.
                </Typography>

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
                  startIcon={<LoginIcon />}
                  sx={{ borderRadius: 3, py: 1.2 }}
                  onClick={submitLogin}
                >
                  Login
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
                      msg: "Google login (UI only)",
                      type: "info",
                    })
                  }
                >
                  Continue with Google
                </Button>

                <div className="text-center mt-4">
                  <span className="text-muted">
                    Don’t have an account?{" "}
                  </span>
                  <Link to="/register" className="fw-bold text-decoration-none">
                    Register
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
