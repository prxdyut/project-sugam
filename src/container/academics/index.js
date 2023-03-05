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
import AssignmentsContainer from "./assignments";
import DoubtsContainer from "./doubts";
import TestsContainer from "./tests";
import { useRouter } from "next/router";

export default function academicsContainer({ page }) {
  const [value, setValue] = React.useState(page);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    newValue == 0 ? router.push("./assignments") : null;
    newValue == 1 ? router.push("./doubts") : null;
    newValue == 2 ? router.push("./tests") : null;
  };

  return (
    <main>
      <Container
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Assignments" />
            <Tab label="Doubts" />
            <Tab label="Tests" />
          </Tabs>
        </Box>

        {value == 0 ? <AssignmentsContainer /> : null}
        {value == 1 ? <DoubtsContainer /> : null}
        {value == 2 ? <TestsContainer /> : null}
      </Container>
    </main>
  );
}
