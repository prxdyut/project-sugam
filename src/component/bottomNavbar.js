import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import {useRouter} from "next/router";

const StyledFab1 = styled(Fab)({
  position: "relative",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const StyledFab2 = styled(Fab)({
  zIndex: 1,
  position: "fixed",
  right: "1rem",
  transition: "bottom 400ms",
  margin: "0 auto",
});

function MenuItem({ page, children }) {
  const router = useRouter();
  const pageActive = router.pathname == (page.split('../..'))[1]

  return (
    <>
      {pageActive ? (
        <StyledFab1 color="secondary" aria-label="add">
          {children}
        </StyledFab1>
      ) : (
        <Link href={page}>
        <IconButton color="inherit" aria-label="open drawer">
          {children}
        </IconButton></Link>
      )}
    </>
  );
}

export default function IconTabs() {
  const [showAppBar, setShowAppBar] = React.useState(true);
const router = useRouter();
console.log(router.pathname)

  return (
    <>
    <Toolbar sx={{mt:1}} />
      <StyledFab2
        color="secondary"
        aria-label="add"
        size="small"
        sx={{
          bottom: showAppBar ? "5rem" : "2rem",
        }}
        onClick={() => setShowAppBar(!showAppBar)}
      >
        {showAppBar ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </StyledFab2>
      <Slide direction="up" appear={false} in={showAppBar} unmountOnExit>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <MenuItem page='../../app/schedule'>
              <EventNoteRoundedIcon />
            </MenuItem>
            <MenuItem page='../../app/academics/assignments'>
              <ListAltRoundedIcon />
            </MenuItem>
            <MenuItem page='../../app/academics/tests'>
              <RuleRoundedIcon />
            </MenuItem>
            <MenuItem page='../../app/academics/doubts'>
              <QuestionMarkRoundedIcon />
            </MenuItem>
            <MenuItem page='../../app/library'>
              <FileDownloadRoundedIcon />
            </MenuItem>
            <Box sx={{ flexGrow: 1 }} />
            <MenuItem page='#'>
              <NotificationsRoundedIcon />
            </MenuItem>

            <MenuItem page='#'>
              <SettingsIcon />
            </MenuItem>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
