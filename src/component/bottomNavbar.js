import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      sx={{
        width: "100vw",
        position: "fixed",
        bottom: "0",
        background: "white",
      }}
      className="bottom-navbar"
    >
      <Tab
        icon={<PhoneIcon />}
        aria-label="phone"
        style={{ minWidth: "20%" }}
      />
      <Tab
        icon={<FavoriteIcon />}
        aria-label="favorite"
        style={{ minWidth: "20%" }}
      />
      <Tab
        icon={<PersonPinIcon />}
        aria-label="person"
        style={{ minWidth: "20%" }}
      />
      <Tab
        icon={<PhoneIcon />}
        aria-label="phone"
        style={{ minWidth: "20%" }}
      />
      <Tab
        icon={<FavoriteIcon />}
        aria-label="favorite"
        style={{ minWidth: "20%" }}
      />
    </Tabs>
  );
}
