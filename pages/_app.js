import "@/styles/globals.css";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <Component {...pageProps} />
      {/* </LocalizationProvider> */}
    </React.Fragment>
  );
}
