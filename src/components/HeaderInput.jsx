import { IconButton, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function HeaderInput({
    header,
    deleteHandler,
    updateHeaderKeyHandler,
    updateHeaderValueHandler,
}) {
    return (
        <Stack direction="row" alignments="center" spacing={1}>
            <TextField
                label="Key"
                value={header.key}
                onChange={(event) => {
                    updateHeaderKeyHandler(event, header.id);
                }}
            />
            <Typography variant="h4">:</Typography>
            <TextField
                label="Value"
                value={header.value}
                onChange={(event) => {
                    updateHeaderValueHandler(event, header.id);
                }}
            />
            <IconButton
                aria-label="delete"
                onClick={() => deleteHandler(header.id)}
            >
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
}
