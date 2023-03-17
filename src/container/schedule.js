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
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const minDate = dayjs("2020-01-01T00:00:00.000");
const maxDate = dayjs("2034-01-01T00:00:00.000");

export default function ScheduleContainer() {
  const [date, setDate] = React.useState(dayjs("2022-04-07"));
  return (
    <main>
      <Container
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box sx={{}}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
            // date={date}
            // onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Card sx={{ borderRadius: 8 }} elevation={0}>
                <Grid container>
                  <Grid xs>
                    <Chip label="14:00 to 15:30" />
                  </Grid>
                  <Grid xs>
                    <Typography variant="h6" align="right">
                      English
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12}>
              <Card sx={{ borderRadius: 8 }} elevation={0}>
                <Grid container>
                  <Grid xs>
                    <Chip label="14:00 to 15:30" />
                  </Grid>
                  <Grid xs>
                    <Typography variant="h6" align="right">
                      English
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12}>
              <Card sx={{ borderRadius: 8 }} elevation={0}>
                <Grid container>
                  <Grid xs>
                    <Chip label="14:00 to 15:30" />
                  </Grid>
                  <Grid xs>
                    <Typography variant="h6" align="right">
                      English
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={12}>
              <Card sx={{ borderRadius: 8 }} elevation={0}>
                <Grid container>
                  <Grid xs>
                    <Chip label="14:00 to 15:30" />
                  </Grid>
                  <Grid xs>
                    <Typography variant="h6" align="right">
                      English
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
