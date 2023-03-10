import * as React from "react";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MenuItem, Stack } from "@mui/material";
import ReturnSubject from "../../function/getSubject";
import { ToggleButton } from "@mui/material";
// import NoSsr from "@mui/base/NoSsr";
// import dynamic from "next/dynamic";
import TextEditor from "../../component/textEditor";
import ImageUploader from "../../component/imageUploader";
import Alert from "../../component/alert";
// import "react-quill/dist/quill.snow.css";
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
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactImageFileToBase64 from "react-file-image-to-base64";
import { Divider, ImageList, ImageListItem, Fade, Grow } from "@mui/material";
import ImageView from "../../component/imageViewer";

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

  console.log(files);

  const [images, setImages] = React.useState([]);
  const [imagesArray, setImagesArray] = React.useState([]);

  console.log(images);
  
  const handleImages = (e) => {
    setImages(e);
    e.map((image, index) =>
      setImagesArray([...imagesArray, `${image.base64_file}`])
    );
  };
  console.log("Images Array", imagesArray);
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
        {console.log(images)}
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
          <div>
            {/* <ReactImageFileToBase64 multiple onCompleted={handleOnCompleted} /> */}
          </div>
          <ImageUploader onChange={handleImages} />
          <ImageView images={imagesArray}>
            <ImageList
              sx={{ width: "100%", height: "max-content", mt: 1 }}
              variant="masonry"
              cols={3}
              gap={8}
            >
              {imagesArray.map((file, index) => (
                <ImageListItem key={index}>
                  {/* <ImagePreview img={file.base64_file} /> */}
                  <img
                    src={`${file}`}
                    srcSet={`${file}`}
                    alt={file}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </ImageView>
          <Alert title={alert} />
        </Stack>
      </Container>
    </main>
  );
}
