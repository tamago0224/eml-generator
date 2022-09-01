import { Stack } from "@mui/material";
import React from "react";
import { HeaderInput } from "./HeaderInput";

/*
HeaderInputを管理するコンポーネント

初期状態で一つのHeaderInputを要素にもち、「＋」ボタンを押すことでHeaderInputを追加する
*/
export function HeaderInputs(props) {
  let headers = props.headers;

  const headerComponents = headers.map((header, index) => {
    return <HeaderInput key={index} hkey={header.key} hvalue={header.value} />;
  });
  return <Stack spacing={2}>{headerComponents}</Stack>;
}
