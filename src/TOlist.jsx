import { Checkbox, Paper } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

const TOlist = (props) => {
  return (
    <>
      <Paper className="todlist">
        <Checkbox></Checkbox>

        <EditIcon
          className="edit"
          // onClick={() => {
          //   props.onSelect(props.val);
          // }}
        ></EditIcon>

        <ClearIcon
          className="clear"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></ClearIcon>

        <div className="list">{props.text}</div>
      </Paper>
    </>
  );
};

export default TOlist;
