import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "../../icon/assignment";
import ScheduleLogo from "../../icon/schedule";
import ResultLogo from "../../icon/result";
import FileLogo from "../../icon/file";
import MathsLogo from "../../icon/subject/maths";
import EnglishLogo from "../../icon/subject/english";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GetSubject from "../../function/getSubject";
import GetIcon from "../../function/getIcon";
import AssignmentsContainer from "./assignments";
import DoubtsContainer from "./doubts";
import TestsContainer from "./tests";
import { useRouter } from "next/router";
import { Collapse, Divider, ImageList, ImageListItem } from "@mui/material";
import {
  ExpandMore,
  IceSkatingTwoTone,
  MoreVertSharp,
} from "@mui/icons-material";
import NoSsr from "@mui/base/NoSsr";

import dynamic from "next/dynamic";

import "react-quill/dist/quill.bubble.css";
import parse from "html-react-parser";
import IgnoreHydrationError from "../../function/ignoreHydrationError";

function Comment({ doubt }) {
  const [showReplies, setShowReplies] = React.useState(false);

  return (
    <>
      <ListItem>
        <ListItemText
          primary={doubt.by}
          secondary={
            <>
              {"— "}
              <IgnoreHydrationError>
                {parse(doubt.content)}
              </IgnoreHydrationError>
            </>
          }
        />
      </ListItem>
      <Divider
        variant={showReplies ? "inset" : ""}
        component="li"
        textAlign="right"
        sx={{ my: -1, transition: "margin 250ms" }}
      >
        <Button
          onClick={
            doubt.replies.length != 0
              ? () => setShowReplies(!showReplies)
              : null
          }
        >
          {"Replies ( " + doubt.replies.length + " ) "}
          <ExpandMore
            sx={{
              transition: "rotate 250ms",
              rotate: showReplies ? "180deg" : "0deg",
            }}
          />
        </Button>
      </Divider>
      <Collapse in={showReplies} appear component="li" divider>
        <List>
          {doubt.replies.map((reply, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemAvatar />
                <ListItemText
                  primary={reply.by}
                  secondary={
                    <React.Fragment>{"— " + reply.content} </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default function DoubtsViewContainer() {
  const [value, setValue] = React.useState("");
  const ReactQuill = React.useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const doubts = [
    {
      id: 1,
      by: "Pradyut",
      content:
        "<h1>Hey ! </h1><p>its been a long time since we've last met</p>",
      replies: [
        {
          by: "Pradyut",
          to: "Pradyut",
          content:
            "Yeah youre right, Prime minister of india is narendra modi.",
        },
        {
          by: "Pradyut",
          to: "Pradyut",
          content:
            "Yeah youre right, Prime minister of india is narendra modi.",
        },
        {
          by: "Pradyut",
          to: "Pradyut",
          content:
            "Yeah youre right, Prime minister of india is narendra modi.",
        },
      ],
    },
    {
      id: 2,
      by: "Vishal",
      content: "National bird of india is PeaCock.",
      replies: [],
    },
    {
      id: 3,
      by: "Ujwal",
      content: value,
      replies: [
        {
          by: "Pradyut",
          to: "Pradyut",
          content:
            "Yeah youre right, Prime minister of india is narendra modi.",
        },
        {
          by: "Pradyut",
          to: "Pradyut",
          content:
            "Yeah youre right, Prime minister of india is narendra modi.",
        },
      ],
    },
  ];

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
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
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
    "link",
    "image",
  ];

  return (
    <main>
      <Container
        sx={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box sx={{ mx: -2 }}>
          <List sx={{ width: "100%" }}>
            {doubts.map((doubt, index) => (
              <React.Fragment key={index}>
                <Comment doubt={doubt} />
              </React.Fragment>
            ))}
          </List>
        </Box>
        <Box>
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
          />
          <Button
            onClick={() =>
              document.getElementsByClassName("ql-image")[0].click()
            }
          >
            Insert Image
          </Button>
        </Box>
      </Container>
    </main>
  );
}
