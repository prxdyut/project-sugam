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
import AssignmentIcon from "../../icon/assignment";
import ScheduleLogo from "../../icon/schedule";
import ResultLogo from "../../icon/result";
import FileLogo from "../../icon/file";
import MathsLogo from "../../icon/subject/maths";
import EnglishLogo from "../../icon/subject/english";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GetSubject from "../../function/getSubject";
import GetIcon from "../../function/getIcon";

function Doubt({ subject, date, content, topic }) {
  return (
    <ListItem
      divider
      button
      secondaryAction={
        <Typography fontSize={24} fontWeight={500}>
          19/25
        </Typography>
      }
    >
      <ListItemAvatar>
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          color="secondary"
          badgeContent=" "
          overlap="circular"
          variant="dot"
        >
          <Avatar sx={{ p: 1.5 }}>
            <GetIcon value={3} color="white" />
          </Avatar>
        </Badge>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className="dotsBreak-60vw">
            <GetSubject value={subject} /> - {topic}
          </div>
        }
        secondary={<div className="dotsBreak-60vw"> {content} </div>}
      />
    </ListItem>
  );
}

export default function DoubtsContainer() {
  const subject = 3;
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
        <Box>
          <FormControlLabel
            value="end"
            control={<Switch color="primary" />}
            label="Show Type"
            labelPlacement="end"
          />
        </Box>
        <IconButton color="inherit" aria-label="open drawer">
          <FilterListIcon />
        </IconButton>
      </Box>
      <Box>
        <List sx={{ mx: -2 }}>
          <Doubt
            subject={2}
            topic={"Binomial Theorem"}
            date={"27 June 2023"}
            content={"Term Exam Term Exam Term Exam Term Exam "}
          />
        </List>
      </Box>
    </Box>
  );
}
