import * as React from "react";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export default function ShowAlert({ title }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, [title]);

  React.useEffect(() => {
    !(title == null) && setShow(true);
  }, []);

  return (
    <Slide in={show} appear={false} direction="up">
      <Alert onClose={() => setShow(false)}>title</Alert>
    </Slide>
  );
}
