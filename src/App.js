import { TextareaAutosize } from "@mui/material";
import * as React from "react";
import { HeaderInputs } from "./components/HeaderInputs";
import { Attachments } from "./components/Attachments";
import { useState } from "react";

function App() {
    const [headers, setHeaders] = useState([
        { id: new Date().getTime(), key: "", value: "" },
    ]);
    const [body, setBody] = useState("");
    /*
     attachments is list of attahcment.
     attachment is obj. schema is following
     {
        id: // time generated object.
        file: // file object
     }
    */
    const [attachments, setAttachments] = useState([]);

    return (
        <React.Fragment>
            <h1>EML Generator</h1>
            <h2>Header</h2>
            <HeaderInputs headers={headers} setHeaders={setHeaders} />
            <h2>Body</h2>
            <TextareaAutosize
                minRows={10}
                placeholder="email body"
                style={{ width: 480 }}
                value={body}
                onChange={(event) => {
                    setBody(event.target.value);
                }}
            />
            <h2>Attachment</h2>
            <Attachments
                attachments={attachments}
                setAttachments={setAttachments}
            />
            <h2>debug</h2>
            {headers
                .filter(
                    (header) =>
                        header.key.length !== 0 && header.value.length !== 0
                )
                .map((header) => {
                    return (
                        <div key={header.id}>
                            {header.key}: {header.value}
                        </div>
                    );
                })}
            <br />
            {body}
        </React.Fragment>
    );
}

export default App;
