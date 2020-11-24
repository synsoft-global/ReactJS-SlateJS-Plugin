import React, { useState, useRef } from "react";
import "./App.css";
import { Editor } from "slate-react";
import { Value } from "slate";
/**
 * Init values.
 */
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "A line of text in a paragraph."
          }
        ]
      }
    ]
  }
});

/**
 * Render borderd block
 */
export default function BorderedBlock() {
  const [value, setValue] = useState(initialValue);
  const renderNode = (props: any, next: any) => {
    const { node, attributes, children, editor } = props;
    const border = node.text.length > 100 ? "4px solid red" : "2px solid black";
    switch (node.type) {
      case "paragraph":
        const style = { border: `${border}` };
        return (
          <p {...attributes} style={style}>
            {children}
          </p>
        );
      default:
        return next();
    }
  };

  return (
    <div className="App">
      <h2>Bordred Block with character count</h2>
      <Editor
        value={value}
        onChange={newValue => setValue(newValue.value)}
        renderBlock={renderNode}
      />
    </div>
  );
}
