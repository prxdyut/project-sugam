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

import { useScrollDirection } from "react-use-scroll-direction";

function Assignment({ subject, date, status }) {
  return (
    <ListItem divider button secondaryAction={<ChevronRightIcon />}>
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
          <>
            New <GetSubject value={subject} /> Assignment
          </>
        }
        secondary={"Due by " + date}
      />
    </ListItem>
  );
}

export default function AssignmentsContainer() {

  const subject = 3;
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
        <Box>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Pending"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Expired"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Done"
          />
        </Box>
        <IconButton color="inherit" aria-label="open drawer">
          <FilterListIcon />
        </IconButton>
      </Box>
      <Box>
        <List sx={{ mx: -2 }}>
          <ListItem divider button secondaryAction={<ChevronRightIcon />}>
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
                  <GetIcon value={subject} color="white" />
                </Avatar>
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary="New Maths Assignment"
              secondary={"Due by 19 Jan 2023"}
            />
          </ListItem>
          <Assignment subject={2} date={"27 June 2023"} />
        </List>
      </Box>
      cfg hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh,
      ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh,
      nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j
      no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh
      jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg
      hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh,
      ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh,
      nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j
      no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh
      jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg
      hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh,
      ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh,
      nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j
      no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh
      jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg
      hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh,
      ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh,
      nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j
      no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh
      jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, ncfg
      hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh, nogulib nogubjh,
      ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j no7gyubhj, ngubjh,
      nogulib nogubjh, ngubj, nubj, ncfg hkfutb mniyuvkh jygukhj ngoyukvh,j
      no7gyubhj, ngubjh, nogulib nogubjh, ngubj, nubj, n
    </Box>
  );
}
