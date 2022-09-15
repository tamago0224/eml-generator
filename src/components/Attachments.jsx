import { Attachment } from "./Attachment";
import { IconButton, Stack } from "@mui/material";
import React from "react";
import { AttachFile } from "@mui/icons-material";

export function Attachments({ attachments, setAttachments }) {
    const deleteAttachmentHandler = (id) => {
        setAttachments(
            attachments.filter((attachment) => attachment.id !== id)
        );
    };
    const appendAttachHandler = (event) => {
        Array.from(event.currentTarget.files).forEach((file) => {
            setAttachments([
                ...attachments,
                { id: new Date().getTime(), file },
            ]);
        });
    };

    return (
        <React.Fragment>
            <Stack spacing={5} alignItems="flex-start">
                {attachments.map((attachment, index) => {
                    return (
                        <Attachment
                            key={index}
                            attachment={attachment}
                            deleteHandler={deleteAttachmentHandler}
                        />
                    );
                })}
            </Stack>
            <IconButton component="label">
                <input
                    hidden
                    type="file"
                    multiple={true}
                    onChange={appendAttachHandler}
                />
                <AttachFile />
            </IconButton>
        </React.Fragment>
    );
}
