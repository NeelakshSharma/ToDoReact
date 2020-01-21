import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
export default function Appbar() {
  return (
    <AppBar
      position="sticky"
      style={{ padding: "20px", background: "#2f8cb4" }}
    >
      <Typography variant="h4">ToDo App</Typography>
    </AppBar>
  );
}
