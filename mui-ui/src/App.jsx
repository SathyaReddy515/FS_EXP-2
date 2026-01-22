import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Paper,
  Divider,
} from "@mui/material";

export default function App() {
  return (
    <>
      {/* ✅ Top Navbar */}
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Experiment-2.4 (MUI UI Design)
          </Typography>
        </Toolbar>
      </AppBar>

      {/* ✅ Page Background */}
      <Box sx={{ bgcolor: "#f4f6f8", minHeight: "100vh", py: 6 }}>
        <Container maxWidth="lg">
          {/* ✅ Header Section */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 3,
              mb: 4,
              textAlign: "center",
              bgcolor: "white",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              UI Design Using Material UI Components
            </Typography>

            <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
              This interface is built using MUI components like AppBar, Cards,
              Grid, TextField and Buttons.
            </Typography>
          </Paper>

          {/* ✅ Main Grid */}
          <Grid container spacing={3}>
            {/* ✅ Form Card */}
            <Grid item xs={12} md={7}>
              <Card
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Registration Form
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 0.5, color: "text.secondary" }}
                  >
                    Fill in the details below to create an account.
                  </Typography>

                  <Divider sx={{ my: 3 }} />

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Full Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Email" type="email" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Password" type="password" />
                    </Grid>
                  </Grid>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                  >
                    Submit
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* ✅ Info Panel */}
            <Grid item xs={12} md={5}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        About Material UI
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "text.secondary", lineHeight: 1.8 }}
                      >
                        Material UI is a React component library that follows
                        Google’s Material Design. It helps in building responsive
                        UI quickly.
                      </Typography>

                      <Button
                        variant="outlined"
                        sx={{
                          mt: 2,
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 700,
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                {/* ✅ Mini Cards */}
                <Grid item xs={12}>
                  <Card sx={{ borderRadius: 3 }}>
                    <CardContent>
                      <Typography sx={{ fontWeight: 700 }}>
                        ✅ Components Used
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        AppBar, Grid, Card, TextField, Button
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12}>
                  <Card sx={{ borderRadius: 3 }}>
                    <CardContent>
                      <Typography sx={{ fontWeight: 700 }}>
                        🎯 Objective
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        Design a modern UI using MUI components.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* ✅ Footer */}
          <Typography
            textAlign="center"
            variant="body2"
            sx={{ mt: 5, color: "text.secondary" }}
          >
            © 2026 | Material UI Experiment-2.4
          </Typography>
        </Container>
      </Box>
    </>
  );
}
