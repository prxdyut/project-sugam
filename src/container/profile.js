import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import FilterListIcon from "@mui/icons-material/FilterList";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "../icon/assignment";
import ScheduleLogo from "../icon/schedule";
import ResultLogo from "../icon/result";
import FileLogo from "../icon/file";
import MathsLogo from "../icon/subject/maths";
import EnglishLogo from "../icon/subject/english";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GetSubject from "../function/getSubject";
import GetIcon from "../function/getIcon";
import DownloadIcon from "@mui/icons-material/Download";
import Grid from "@mui/material/Unstable_Grid2";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function TestsContainer() {
  return (
    <main>
      <Container
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box>
          <Box
            sx={{
              position: "relative",
              top: "48px",
              left: "calc(50% - (96px/2))",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/173818773-portrait-of-happy-clever-intelligent-young-man-in-glasses-looking-at-camera-and-smiling-headshot-of.jpg?ver=6"
              sx={{ width: 96, height: 96 }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              bgcolor: "#1976d2",
              borderRadius: 6,
            }}
          >
            <Box sx={{ height: "48px" }} />
            <Typography
              variant={"h6"}
              color="white"
              sx={{ pt: 1, textAlign: "center" }}
            >
              Pradyut Das
            </Typography>
            <Typography
              variant={"subtitle1"}
              color="white"
              sx={{ pb: 1, textAlign: "center" }}
            >
              STD 11
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: 18 }} />
        <Box sx={{ bgcolor: "lightgray", borderRadius: 6, p: 2 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Personal Info" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid xs={6}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Fees" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid xs={6}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reports" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid xs={6}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Seat" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid xs={6}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Presentee" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid xs={6}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="{Custom}" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid xs={6}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="{Custom}" />
                </ListItemButton>
              </ListItem>
            </Grid>
            <Grid xs={12}>
              <ListItem
                disablePadding
                sx={{ bgcolor: "white", borderRadius: 3 }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
