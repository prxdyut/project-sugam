import * as React from "react";

import { Button } from "@mui/material";
import { UploadFileRounded } from "@mui/icons-material";
import ReactImageFileToBase64 from "react-file-image-to-base64";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageUploader({ onChange }) {
  //   const [images, setImages] = React.useState([]);

  const handleOnCompleted = (files) => {
    onChange(files);
  };

  const CustomisedButton = ({ triggerInput }) => {
    return (
      <Button variant="outlined" type="upload" onClick={triggerInput}>
        <UploadFileRounded /> &nbsp; Upload                           
      </Button>                                                        
    );
  };
  return (
    <div>
      <ReactImageFileToBase64
        multiple
        onCompleted={handleOnCompleted}
        CustomisedButton={CustomisedButton}
      />
    </div>
  );
}