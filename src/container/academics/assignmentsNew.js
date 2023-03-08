import * as React from "react";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MenuItem, Stack } from "@mui/material";
import ReturnSubject from "../../function/getSubject";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup, Box, Button } from "@mui/material";
// import NoSsr from "@mui/base/NoSsr";
// import dynamic from "next/dynamic";
import TextEditor from "../../component/textEditor";
// import "react-quill/dist/quill.snow.css";
import { UploadFileRounded } from "@mui/icons-material";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Assignment() {
  const [toggleButtonValue, setToggleButtonValue] = React.useState(() => [
    "tutors",
    "mates",
  ]);
  const [value, setValue] = React.useState();

  const handleToggleButtonValue = (event, newValue) => {
    setToggleButtonValue(newValue);
  };

  return (
    <main>
      <Container
        sx={{
          minHeight: "100vh",
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
          <Box sx={{}}>
            <TextEditor style={{}} onChange={setValue} />
          </Box>
          <Button variant="outlined">
            <UploadFileRounded /> &nbsp; Upload
          </Button>
        </Stack>
      </Container>
    </main>
  );
}