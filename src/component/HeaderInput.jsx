import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function HeaderInput(props) {
  let key = props.hkey;
  let value = props.hvalue;
  return (
    <Box component="span" sx={{ mr: 50 }}>
      <TextField label="Key" value={key} />
      <TextField label="Value" value={value} />
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
