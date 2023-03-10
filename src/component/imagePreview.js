import * as React from "react";
import {
  ToggleButtonGroup,
  Box,
  Button,
  ButtonGroup,
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  ImageList,
  ImageListItem,
  Fade,
  Grow,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DecreaseIcon from "@mui/icons-material/RemoveCircleOutline";
import IncreaseIcon from "@mui/icons-material/AddCircleOutline";
import UploadFileRounded from "@mui/icons-material/UploadFileRounded";
import ReactImageFileToBase64 from "react-file-image-to-base64";
import CopyIcon from "@mui/icons-material/ContentCopy";
import PinchZoomPan from "react-image-zoom-pan";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

export default function ImagePreview({ img }) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <style>
          .pinchZoom-container {">"} div {">"} div {"{"}
          display: none;
          {/* {'sfcsf {afafa}   sdvsdvsd'} */}
          {"}"}
        </style>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Preview
            </Typography>
            <ButtonGroup variant="text">
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(img);
                  alert("Copied the text: " + img);
                }}
              >
                <CopyIcon sx={{ color: "white" }} />
              </IconButton>
              <a href={img} target="_blank">
                <IconButton>
                  <OpenInNewIcon sx={{ color: "white" }} />
                </IconButton>
              </a>
            </ButtonGroup>
            <ButtonGroup variant="text" sx={{ mx: 2, mr: -1 }}>
              <IconButton
                onClick={() =>
                  document.getElementsByClassName("iconButton")[0].click()
                }
              >
                <DecreaseIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                onClick={() =>
                  document.getElementsByClassName("iconButton")[1].click()
                }
              >
                <IncreaseIcon sx={{ color: "white" }} />
              </IconButton>
            </ButtonGroup>
          </Toolbar>
        </AppBar>

        <div
          className="pinchZoom-container"
          style={{
            // position: "absolute",
            height: "100%",
            width: "100%",
          }}
        >
          <PinchZoomPan
            position="center"
            zoomButtons
            className="pinchZoom-main"
          >
            <img alt="Demo Image" src={img} />
          </PinchZoomPan>
        </div>
      </Dialog>
    </>
  );
}
