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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "../icon/assignment";
import ScheduleLogo from "../icon/schedule";
import ResultLogo from "../icon/result";
import FileLogo from "../icon/file";


export default function feedContainer() {
  return (
    <main>
      <Container
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Activity"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Announcement"
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // sx={{ m: -1 }}
          >
            <FilterListIcon />
          </IconButton>
        </Box>
        <Box>
          <List sx={{ mx: -2 }}>
            <ListItem
              divider
              button
              secondaryAction={
                <Typography variant="caption">2 Jan </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AssignmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="New Maths Assignment"
                secondary={"Due by 19 Jan 2023"}
              />
            </ListItem>
            <ListItem
              divider
              button
              secondaryAction={
                <Typography variant="caption">2 Jan </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ScheduleLogo />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="New Schedule Update"
                secondary={"2 Jan - 9 Jan"}
              />
            </ListItem>
            <ListItem
              divider
              button
              secondaryAction={
                <Typography variant="caption">2 Jan </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ResultLogo />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="New Maths Report"
                secondary={"Score: 19/20"}
              />
            </ListItem>
            <ListItem
              divider
              button
              secondaryAction={
                <Typography variant="caption">2 Jan </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AssignmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="New Maths Assignment"
                secondary={"Due by 19 Jan 2023"}
              />
            </ListItem>
            <ListItem
              divider
              button
              secondaryAction={
                <Typography variant="caption">2 Jan </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ScheduleLogo />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="New Schedule Update"
                secondary={"2 Jan - 9 Jan"}
              />
            </ListItem>
            <ListItem
              divider
              button
              secondaryAction={
                <Typography variant="caption">2 Jan </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ResultLogo />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="New Maths Report"
                secondary={"Score: 19/20"}
              />
            </ListItem>
            <ListItem
              divider
              button
              secondaryAction={
                <Typography variant="caption">2 Jan </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FileLogo />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="New PDF File"
                secondary={"Surya K. Uploaded New File"}
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </main>
  );
}
