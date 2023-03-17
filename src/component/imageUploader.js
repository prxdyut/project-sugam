import * as React from "react";

import { Button, Box } from "@mui/material";
import {
  FormatColorResetRounded,
  TroubleshootRounded,
  TroubleshootSharp,
  UploadFileRounded,
} from "@mui/icons-material";
import ReactImageFileToBase64 from "react-file-image-to-base64";

import Masonry from "@mui/lab/Masonry";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

export default function ImageUploader({ onChange }) {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleOnSelect = (e) => {
    const files = e.target.files;
    console.log(files);
    setImages([...images, files]);

    const fr = new FileReader();
    setLoading(true);
    files.map((file) => {
      fr.readAsArrayBuffer(file);
      // you can keep blob or save blob to another position
      const blob = new Blob([fr.result]);

      // url for download
      const url = URL.createObjectURL(blob, { type: "image/png" });
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.download = "image";
      a.click();

      setLoading(false);
      console.log(url);
      alert(url);
    });
  };

  return (
    <div>
      <input id="upload-image" type="file" onChange={handleOnSelect} multiple />
      <LoadingButton
        loading={loading}
        loadingPosition="start"
        startIcon={<UploadFileRounded />}
        variant="outlined"
        type="upload"
        onClick={() => document.getElementById("upload-image").click()}
      >
        Upload
      </LoadingButton>
      {JSON.stringify(images)}
      <Box sx={{ width: "100%", minHeight: 829 }}>
        <Masonry columns={3} spacing={2}>
          {images.map((item, index) => (
            <div key={index}>
              <a href={item.base64_file} target="_blank" rel="noreferrer">
                <img
                  src={`${item.base64_file}`}
                  srcSet={`${item.base64_file}`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                />
              </a>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
}
