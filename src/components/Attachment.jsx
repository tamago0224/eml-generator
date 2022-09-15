import { IconButton, Stack, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function Attachment({ attachment, deleteHandler }) {
    const filename = attachment.file.name;
    const contentType = attachment.file.type;

    return (
        <Stack direction="row" alignments="center" spacing={1}>
            <TextField label="filename" value={filename} />
            <TextField label="content-type" value={contentType} />
            <IconButton onClick={() => deleteHandler(attachment.id)}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
}
