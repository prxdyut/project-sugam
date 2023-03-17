import * as React from "react";

import {
  Container,
  Typography,
  ToggleButtonGroup,
  Box,
  Button,
  ToggleButton,
  ButtonGroup,
  MenuItem,
  TextField,
  Stack,
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Grid,
  Divider,
  ImageList,
  ImageListItem,
  Fade,
  Grow,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReturnSubject from "../../function/getSubject";

export default function AssignmentsNewContainer() {
  const [inputData, setInputData] = React.useState({
    expiry: false,
  });
  return (
    <main>
      <style>
        {!inputData.expiry &&
          "#dateSelector::-webkit-datetime-edit-fields-wrapper { display: none }"}
      </style>
      <Container
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ my: 1 }}>
          New Assignment
        </Typography>
        <Stack sx={{ my: 1 }} spacing={2}>
          <TextField select label="Subject">
            {[...Array(7)].map((u, i) => (
              <MenuItem key={i} value={i}>
                <ReturnSubject value={i} />
              </MenuItem>
            ))}
          </TextField>
          <TextField variant="outlined" label="Topic" />
          <Stack direction="" gap={2}>
            <TextField fullWidth select label="Class">
              {[...Array(13)].map(
                (u, i) =>
                  i > 0 && (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  )
              )}
            </TextField>
            <TextField fullWidth select label="Batch">
              <MenuItem value={"a"}>A</MenuItem>
              <MenuItem value={"b"}>B</MenuItem>
            </TextField>
          </Stack>
          <TextField
            inputProps={{ id: "dateSelector" }}
            type="date"
            variant="outlined"
            label="Expiry"
            value={inputData.expiry || ""}
            onChange={(e) =>
              setInputData({ ...inputData, expiry: e.target.value })
            }
            onClick={(e) => e.target.showPicker()}
          />
        </Stack>
      </Container>
    </main>
  );
}
