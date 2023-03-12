import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Popover from "@mui/material/Popover";

import LinearProgress from "@mui/material/LinearProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Fade } from "@mui/material";

import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import generateLink from "../function/generateLink";

const drawerWidth = 240;
const navItems = [
  {
    type: "button",
    title: "Feed",
    link: "feed",
    icon: <AllInboxIcon />,
  },
  { type: "divider" },
  { type: "text", title: "Academics" },
  {
    type: "button",
    title: "Assignments",
    link: "academics/assignments",
    icon: <ListAltRoundedIcon />,
  },
  {
    type: "button",
    title: "Tests",
    link: "academics/tests",
    icon: <RuleRoundedIcon />,
  },
  {
    type: "button",
    title: "Doubts",
    link: "academics/doubts",
    icon: <QuestionMarkRoundedIcon />,
  },
  { type: "divider" },
  {
    type: "button",
    title: "Schedule",
    link: "schedule",
    icon: <EventNoteRoundedIcon />,
  },
  {
    type: "button",
    title: "Library",
    link: "library",
    icon: <FileDownloadRoundedIcon />,
  },
  { type: "divider" },
  { type: "text", title: "Profile" },
  {
    type: "button",
    title: "Personal Info",
    link: "library",
    icon: <WidgetsIcon />,
  },
  {
    type: "button",
    title: "Remarks",
    link: "library",
    icon: <WidgetsIcon />,
  },
  {
    type: "button",
    title: "Fees",
    link: "library",
    icon: <WidgetsIcon />,
  },
  {
    type: "button",
    title: "Reports",
    link: "library",
    icon: <WidgetsIcon />,
  },
  {
    type: "button",
    title: "Reports",
    link: "library",
    icon: <WidgetsIcon />,
  },
  {
    type: "button",
    title: "Reports",
    link: "library",
    icon: <WidgetsIcon />,
  },
];
import { useRouter } from "next/router";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const router = useRouter();
  console.log(router.pathname, router.pathname.split("/").length);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const link = "";
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        XYZ Classes
      </Typography>
      <Box
        sx={{
          position: "sticky",
          top: "0",
          background: "white",
          zIndex: "1",
        }}
      >
        <Typography variant="body1" sx={{ py: 1, px: 2 }} textAlign="start">
          Hey! Pradyut Das
        </Typography>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <>
            {item.type == "button" ? (
              <ListItem key={index} disablePadding>
                <Link href={generateLink(item.link)} style={{ width: "100%" }}>
                  <ListItemButton sx={{ textAlign: "left" }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ) : null}
            {item.type == "divider" ? <Divider component="li" /> : null}
            {item.type == "text" ? (
              <Typography
                component="li"
                variant="caption"
                sx={{ mt: 2, mb: 1, mx: 2, textAlign: "start" }}
              >
                {item.title}
              </Typography>
            ) : null}
          </>
        ))}
      </List>
      <Toolbar sx={{ position: "sticky", bottom: "0", background: "white" }}>
        <Button
          variant="text"
          fullWidth
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "red",
          }}
          disableFocusRipple
        >
          Log out
          <LogoutIcon size="small" />
        </Button>
      </Toolbar>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ minWidth: "25vw" }}
      >
        <List>
          <ListItem disablePadding divider>
            <ListItemButton>
              <ListItemText
                primary="View Account"
                component="a"
                href="#account"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText color="danger" primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
      <Toolbar sx={{ mb: 1 }} />
      {props.variant == "primary" ? (
        <AppBar component="nav" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: -1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="body1"
              nowrap
              component="div"
              sx={{
                flexGrow: 1,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              Search for Assignments, Resources
            </Typography>
            <IconButton
              color="inherit"
              edge="end"
              sx={{ m: 0 }}
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              edge="end"
              // onClick={handleDrawerToggle}
              sx={{ mr: -1 }}
              aria-describedby={id}
              onClick={handleClick}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/2.jpg"
                sx={{ width: 24, height: 24 }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : props.variant == "secondary" ? (
        <AppBar component="nav" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: -1 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography
              variant="body1"
              nowrap
              component="div"
              sx={{
                flexGrow: 1,
                // textOverflow: "ellipsis",
                // whiteSpace: "nowrap",
                // overflow: "hidden",
              }}
            >
              {props.title}{" "}
            </Typography>
            <IconButton
              color="inherit"
              edge="end"
              sx={{ mr: -1 }}
              onClick={() => setSearchOpen(true)}
            >
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
          <Box></Box>
        </AppBar>
      ) : (
        "error"
      )}

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* <div
        id="1"
        style={{
          position: "fixed",
          width: "100%",
          height: "56px",
          background: "lightgray",
          top: "0",
          zIndex: !searchOpen ? "0" : "99999",
          transition:
            "opacity 350ms cubic-bezier(0.6, -0.28, 0.74, 0.05) 0s, z-index 350ms ease 0s",
          opacity: !searchOpen ? "0" : "1",
          display: "flex",
          alignItems: "center",
          // display: searchOpen ? "" : "none",
        }}
      >
        <Container>
          <InputBase
            sx={{ width: "100%" }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
            endAdornment={
              <Box sx={{ display: "flex" }}>
                <IconButton
                  type="button"
                  sx={{ p: "10px", mr: -1 }}
                  aria-label="cancel"
                  onClick={() => setSearchOpen(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            }
          />
        </Container>
      </div> */}
      <Fade in={searchOpen}>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "56px",
            background: "lightgray",
            top: "0",
            zIndex: "99999",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <InputBase
              sx={{ width: "100%" }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
              endAdornment={
                <Box sx={{ display: "flex" }}>
                  <IconButton
                    type="button"
                    sx={{ p: "10px", mr: -1 }}
                    aria-label="cancel"
                    onClick={() => setSearchOpen(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              }
            />
          </Container>
        </div>
      </Fade>
    </Box>
  );
}

export default DrawerAppBar;
