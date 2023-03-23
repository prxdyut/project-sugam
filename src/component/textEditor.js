import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Popper from "@mui/material/Popper";

import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

import "react-quill/dist/quill.bubble.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => (
    <Stack gap={1}>
      <Skeleton variant="rounded" height={18 + 12 * 2} />
      <Skeleton variant="rounded" height={100} />
    </Stack>
  ),
});

import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import SubscriptIcon from "@mui/icons-material/Subscript";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

function CustomizedDividers() {
  const [tools, setTools] = React.useState({
    bold: false,
    italic: false,
  });

  const [format, setFormat] = React.useState(() => []);

  console.log(format);

  const handleFormat = (event, newFormats) => {
    setFormat(newFormats);
  };

  const bold = document
    .getElementsByClassName("ql-bold")[0]
    .classList.contains("ql-active");

  const italic = document
    .getElementsByClassName("ql-italic")[0]
    .classList.contains("ql-active");

  const updateTools = () => {
    setTools({
      ...format,
      bold,
      italic,
    });
  };

  console.log(tools);

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={format}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="strike" aria-label="underlined">
            <StrikethroughSIcon />
          </ToggleButton>
          <ToggleButton value="header" aria-label="underlined">
            <TextIncreaseIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={script}
          exclusive
          onChange={handleScript}
          aria-label="text alignment"
        >
          <ToggleButton value="sub" aria-label="right aligned">
            <SubscriptIcon />
          </ToggleButton>
          <ToggleButton value="super" aria-label="justified">
            <SuperscriptIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={list}
          exclusive
          onChange={handleList}
          aria-label="text alignment"
        >
          <ToggleButton value="bullet" aria-label="right aligned">
            <FormatListBulletedIcon />
          </ToggleButton>
          <ToggleButton value="numbered" aria-label="justified">
            <FormatListNumberedIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}

const TextEditor = ({ onChange, style, placeholder, theme }) => {
  // Toolbar Options
  const modules = {
    toolbar: [
      // [{ font: [] }],
      // [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ align: [] }],
      // [{ color: [] }, { background: [] }],

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
    "script",
    "color",
    "background",
  ];

  // Toolbar Trigger
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const showFormat = Boolean(anchorEl);

  // Tools Trigger
  const [toolbarTrigger, fireToolbarTrigger] = React.useState();

  return (
    <Box>
      {/* <QuillNoSSRWrapper
        theme="snow"
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      /> */}
      <QuillNoSSRWrapper
        theme="snow"
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Compose a comment..."
        onChangeSelection={() =>
          fireToolbarTrigger(Math.round(Math.random() * 1000000000000))
        }
      />
      <ToggleButton onClick={handleClick} selected={showFormat}>
        <EditIcon />
      </ToggleButton>
      <Popper open={showFormat} anchorEl={anchorEl}>
        <AllTools trigger={toolbarTrigger} />
      </Popper>
    </Box>
  );
};

const AllTools = ({ trigger }) => {
  // React.useEffect(() => {
  //   UpdateToolbarOptions();
  // }, []);

  React.useEffect(() => {
    UpdateToolbarOptions();
  }, [trigger]);

  const [toolFormats, setToolFormats] = React.useState(() => [
    "bold",
    "italic",
  ]);
  console.log(toolFormats);

  const UpdateToolbarOptions = () => {
    const boldSelected = document
      .getElementsByClassName("ql-bold")[0]
      .classList.contains("ql-active");

    boldSelected
      ? toolFormats.includes("bold")
        ? console.log("do nothing")
        : setToolFormats([...toolFormats, "bold"])
      : setToolFormats([...toolFormats.filter((el) => el != "bold")]);
  };

  return (
    <React.Fragment>
      <ToggleButtonGroup
        value={toolFormats}
        onChange={(e, value) => setToolFormats(value)}
        aria-label="text formatting"
      >
        <ToggleButton
          value="bold"
          aria-label="bold"
          onClick={() => document.getElementsByClassName("ql-bold")[0].click()}
        >
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </React.Fragment>
  );
};

export default TextEditor;
