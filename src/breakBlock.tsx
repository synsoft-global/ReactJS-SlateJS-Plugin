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
 * Break lines into two part.
 */
export default function BreakBlock() {
  const [value, setValue] = useState(initialValue);
  const editor = useRef<Editor | null>(null);

  const onClick = e => {
    const { selection, startText } = value;
    const { start } = selection;
    const { text } = startText;
    const { offset } = start;

    let left = text.slice(0, offset).search(/\S+$/);

    if (left === -1) {
      // character before the cursor is a space, selection starts at the cursor
      left = offset;
    }

    let right = text.slice(offset).search(/\s/);
    if (right < 0) {
      // character after teh cursor is a space, selection ends at the cursor
      right = text.length;
    } else {
      right = right + offset;
    }

    if (left === right || left === 0 || right === offset) {
      // nothing to do
      return "";
    }

    if (editor.current) {
      editor.current.insertText("\n"); // Insert a new line
    }
    e.preventDefault();
  };

  return (
    <div className="App">
      <h2>Break into two lines</h2>
      <button onClick={onClick}>break</button>
      <Editor
        ref={editor}
        value={value}
        onChange={newValue => setValue(newValue.value)}
      />
    </div>
  );
}
