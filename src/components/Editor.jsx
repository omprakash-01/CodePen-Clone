import { useState } from "react";

import React from "react";
import { Box } from "@mui/material";
import "./Editor.css";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "../App.css";

function Editor({ heading, Icon, color, value, onChange }) {
  const [open, setOpen] = useState(true);
  const handlechange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <>
      <Box className="box-1" style={open ? null : { flexGrow: 0 }}>
        <Box className="box-2">
          <Box className="box-3">
            <Box
              component="span"
              className="box-4"
              style={{ background: color }}
            >
              {Icon}
            </Box>
            {heading}
          </Box>
          <CloseFullscreenIcon
            fontSize="small "
            style={{ alignSelf: "center" }}
            onClick={() => setOpen((prevState) => !prevState)}
          ></CloseFullscreenIcon>
        </Box>
        <ControlledEditor
          className="controlled-editor"
          value={value}
          onBeforeChange={handlechange}
          options={{
            theme: "material",
            lineNumbers: true,
          }}
        />
      </Box>
    </>
  );
}

export default Editor;
