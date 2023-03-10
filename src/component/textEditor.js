import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

const TextEditor = ({ onChange, style, placeholder, theme }) => {
  const ReactQuill = React.useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ color: [] }, { background: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
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
    <Box>
      <ReactQuill
        theme={theme ? theme : "snow"}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default TextEditor;
