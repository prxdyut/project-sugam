import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

export default function ScheduleContainer() {
  const [value, setValue] = React.useState("");
  const ReactQuill = React.useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "align",
        "direction",
      ],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "formula",
    "align",
    "header",
  ];
  return (
    <main>
      <Container
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box sx={{}}>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
        </Box>
      </Container>
    </main>
  );
}
