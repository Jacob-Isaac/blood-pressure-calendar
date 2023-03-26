import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTask } from "./Slice";
import { nanoid } from "@reduxjs/toolkit";

const AddToList = () => {
  const [input, setInput] = useState({
    id: undefined,
    up: undefined,
    down: undefined,
    pulse: undefined,
    note: "",
  });
  const dispatch = useDispatch();
  const focus = React.useRef<HTMLInputElement>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.up || !input.down || !input.pulse) {
      return;
    }
    dispatch(
      addTask({
        id: nanoid(),
        up: input.up,
        down: input.down,
        pulse: input.pulse,
        note: input.note,
      })
    );
    setInput({
      id: undefined,
      up: undefined,
      down: undefined,
      pulse: undefined,
      note: "",
    });
    if (focus.current) {
      focus.current.focus();
    }
  };

  return (
    <div className="AddToList">
      <input
        type="number"
        min="90"
        max="250"
        placeholder="Up"
        className="AddToList-input"
        value={input.up || ""}
        onChange={handleChange}
        name="up"
        ref={focus}
      />
      <input
        type="number"
        min="40"
        max="130"
        placeholder="Down"
        className="AddToList-input"
        value={input.down || ""}
        onChange={handleChange}
        name="down"
      />
      <input
        type="number"
        min="30"
        max="200"
        placeholder="Pulse"
        className="AddToList-input"
        value={input.pulse || ""}
        onChange={handleChange}
        name="pulse"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List{" "}
      </button>
    </div>
  );
};

export default AddToList;
