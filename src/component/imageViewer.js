import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";
import Slider from "@mui/material/Slider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ images }) {
  const [open, setOpen] = React.useState(false);
  const [zoom, setZoom] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const increaseZoom = () => {
    zoom + 0.25 <= 10 && setZoom(zoom + 0.25);
  };

  const decreaseZoom = () => {
    zoom - 0.25 >= 1 && setZoom(zoom - 0.25);
  };

  const resetZoom = () => setZoom(1);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    resetZoom();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    resetZoom();
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "fixed", top: 0 }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Slider
              sx={{ ml: 2, flex: 1 }}
              value={zoom}
              onChange={(e) =>
                e.target.value / 10 >= 0 && setZoom(e.target.value / 10)
              }
              aria-label="Default"
              valueLabelDisplay="auto"
              color="secondary"
            />
            <Button autoFocus color="inherit" onClick={increaseZoom}>
              +
            </Button>
            <Button autoFocus color="inherit" onClick={decreaseZoom}>
              -
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            sx={{
              display: "block",
              overflow: "hidden",
              height: "calc(100vh - 56px - 32px - 8px*2)",
              width: "100vw",
              objectFit: "contain",
              scale: " " + zoom + " ",
              transition: "scale 0.2s",
            }}
            src={images[activeStep].src}
            alt={images[activeStep].src}
          />
        </Box>
        <MobileStepper
          elevation={2}
          sx={{ position: "fixed", width: "100%", bottom: "0" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Dialog>
    </Box>
  );
}
