import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

export default function LoginContainer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <main className="Password-reset">
      <Drawer
        anchor={"bottom"}
        open={drawerOpen}
        onClose={(e) => setDrawerOpen(false)}
        
      >
        <Box
          sx={{
            height: "50vh",
            borderRadius: "32px 32px 0 0",
          }}
        >
          <Box
            sx={{
              height: "32px",
              background: "rgb(128 128 128 / 10%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "25%",
                height: "6px",
                borderRadius: "1rem",
                background: "rgb(128 128 128 / 100%)",
              }}
            />
          </Box>
          <Box>
            <Container sx={{ paddingTop: 1 }}>
              <Typography variant="h5" gutterBottom>
                Reset Password
              </Typography>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{ width: "100%" }}
              />
              <Typography variant="caption" gutterBottom>
                {"We’ll send you a Password Reset link on your email."}
              </Typography>
            </Container>
          </Box>
        </Box>
      </Drawer>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Pradyut Das"
            src="https://i.pinimg.com/474x/bf/74/2d/bf742dde20fa0faa75ed5cad43fad698.jpg"
            sx={{ width: 56 * 2, height: 56 * 2 }}
          />
          <Typography variant="h5" gutterBottom>
            XYZ Classes
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Box sx={{ textAlign: "right" }} onClick={(e) => setDrawerOpen(true)}>
            <Typography variant="caption" gutterBottom>
              Forgot Password?
            </Typography>
            <Typography variant="caption" color="primary" gutterBottom>
              Reset
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Button variant="contained">LOGIN</Button>
        </Box>
      </Container>
    </main>
  );
}
