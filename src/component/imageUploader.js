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
  const [blobURLs, setBlobURLs] = React.useState([]);

  console.log(images);
  console.log(blobURLs);

  const buffer = (action) => {
    action == "start" && setLoading(true);
    action == "stop" && setTimeoutime(() => setLoading(false), 100);
  };

  const handleOnSelect = (e) => {
    buffer("start");
    const files = e.target.files;

    const filesArray = Object.keys(files).map((key) => files[key]);
    filesArray.map((file) => {
      setImages(file);

      if (!file) {
        console.log("nothing here");
      }

      let start = performance.now();
      var mime = file.type, // store mime for later
        rd = new FileReader(); // create a FileReader

      rd.onload = function (e) {
        var blob = new Blob([e.target.result], {
            type: mime,
          }),
          url = URL.createObjectURL(blob),
          img = new Image();

        console.log(url);
        setBlobURLs([...blobURLs, { src: `${url}` }]);
        img.onload = function () {
          URL.revokeObjectURL(this.src); // clean-up memory
          console.log(start - performance.now()); // add image to DOM
        };
      };

      var chunk = file.slice(0, 1024 * 1024 * 10); // .5MB
      rd.readAsArrayBuffer(chunk); // read file object
    });
    buffer("stop");
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
      {JSON.stringify(blobURLs)}
      <Box sx={{ width: "100%", minHeight: 829 }}>
        <Masonry columns={3} spacing={2}>
          {blobURLs.map((item, index) => (
            <div key={index}>
              <a href={item.src} target="_blank" rel="noreferrer">
                <img
                  src={`${item.src}`}
                  srcSet={`${item.src}`}
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
