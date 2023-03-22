import * as React from "react";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MenuItem, Stack } from "@mui/material";
import ReturnSubject from "../../function/getSubject";
import { ToggleButton } from "@mui/material";
import TextEditor from "../../component/textEditor";
import ImageUploader from "../../component/imageUploader";
import Alert from "../../component/alert";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DecreaseIcon from "@mui/icons-material/RemoveCircleOutline";
import IncreaseIcon from "@mui/icons-material/AddCircleOutline";
import { UploadFileRounded } from "@mui/icons-material";
import { Divider, ImageList, ImageListItem, Fade, Grow } from "@mui/material";

export default function DoubtsNewContainer() {
  const [toggleButtonValue, setToggleButtonValue] = React.useState(() => [
    "tutors",
    "mates",
  ]);
  const [editorCode, setEditorCode] = React.useState();

  const [files, setFile] = React.useState([]);

  const handleToggleButtonValue = (event, newValue) => {
    setToggleButtonValue(newValue);
  };

  const [alert, setAlert] = React.useState(null);

  const [images, setImages] = React.useState([]);

  console.log(images);

  const handleImages = (e) => {
    setImages(e);
  };

  return (
    <main>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ my: 1 }}>
          New Doubt
        </Typography>
        <Stack sx={{ my: 1 }} spacing={2}>
          <TextField select label="Subject">
            {[...Array(7)].map((u, i) => (
              <MenuItem key={i} value={i}>
                <ReturnSubject value={i} />
              </MenuItem>
            ))}
          </TextField>
          <TextField fullWidth variant="outlined" label="Topic" />
          <ToggleButtonGroup
            color="primary"
            aria-label="Platform"
            value={toggleButtonValue}
            onChange={handleToggleButtonValue}
            fullWidth
          >
            <ToggleButton value="tutors">Tutors</ToggleButton>
            <ToggleButton value="mates">Mates</ToggleButton>
          </ToggleButtonGroup>
          <TextEditor
            style={{}}
            onChange={setEditorCode}
            placeholder={"Explain your Doubt in Detail"}
          />
          <ImageUploader setImageUpload={handleImages} />
        </Stack>
      </Container>
    </main>
  );
}
