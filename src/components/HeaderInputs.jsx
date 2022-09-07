import { IconButton, Stack } from "@mui/material";
import React from "react";
import { HeaderInput } from "./HeaderInput";
import AddIcon from "@mui/icons-material/AddCircleOutline";

/*
HeaderInputを管理するコンポーネント

初期状態で一つのHeaderInputを要素にもち、「＋」ボタンを押すことでHeaderInputを追加する
*/
export function HeaderInputs({ headers, setHeaders }) {
    const appendHandler = () => {
        setHeaders([
            ...headers,
            { id: new Date().getTime(), key: "", value: "" },
        ]);
    };
    const deleteHandler = (id) => {
        setHeaders(headers.filter((header) => header.id !== id));
    };
    const updateHeaderKeyHandler = (event, id) => {
        setHeaders(
            headers.map((header) => {
                if (header.id === id) {
                    header.key = event.target.value;
                }
                return header;
            })
        );
    };
    const updateHeaderValueHandler = (event, id) => {
        setHeaders(
            headers.map((header) => {
                if (header.id === id) {
                    header.value = event.target.value;
                }
                return header;
            })
        );
    };

    return (
        <React.Fragment>
            <Stack spacing={2} alignItems="flex-start">
                {headers.map((header) => {
                    return (
                        <HeaderInput
                            key={header.id}
                            header={header}
                            deleteHandler={deleteHandler}
                            updateHeaderKeyHandler={updateHeaderKeyHandler}
                            updateHeaderValueHandler={updateHeaderValueHandler}
                        />
                    );
                })}
            </Stack>
            <IconButton size="large" onClick={appendHandler}>
                <AddIcon />
            </IconButton>
        </React.Fragment>
    );
}
