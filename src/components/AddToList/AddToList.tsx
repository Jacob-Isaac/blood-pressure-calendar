import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTask } from "../Slice/Slice";
import { nanoid } from "@reduxjs/toolkit";
import { AddToList1,AddToListInput,AddToListTextArea, AddToListBtn  } from "./styled";

const AddToList = () => {

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "up") {
  //     if (value >= 90 && value <= 250) {
  //       setInput((prevInput) => ({ ...prevInput, [name]: value }));
  //     } else if (value < 90) {
  //       setInput((prevInput) => ({ ...prevInput, [name]: 90 }));
  //     } else if (value > 250) {
  //       setInput((prevInput) => ({ ...prevInput, [name]: 250 }));
  //     }
  //   } else {
  //     setInput((prevInput) => ({ ...prevInput, [name]: value }));
  //   }
  // }; hook preventing to type any value

  const [input, setInput] = useState({
    id: undefined,
    up: undefined,
    down: undefined,
    pulse: undefined,
    note: "",
    date: undefined,
  });

  const dispatch = useDispatch();
  const focus = React.useRef<HTMLInputElement>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
  
    setInput({
      ...input,
      [name]: name === "note" ? value : parseFloat(value),
    });
  };

  const onFormSubmit = (event: any) => {
    event.preventDefault();
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
        date: new Date(),
      })
    );
    setInput({
      id: undefined,
      up: undefined,
      down: undefined,
      pulse: undefined,
      note: "",
      date: undefined,
    });
    if (focus.current) {
      focus.current.focus();
    }
  };
  return (
    <AddToList1 onSubmit={onFormSubmit}>
      <AddToListInput
        type="number"
        step="1"
        min="90"
        max="250"
        placeholder="Up"
        value={input.up || ""}
        onChange={handleChange}
        name="up"
        ref={focus}
   required
      />
      <AddToListInput
        type="number"
        min="40"
        max="130"
        placeholder="Down"
        value={input.down || ""}
        onChange={handleChange}
        name="down"
        required
      />
      <AddToListInput
        type="number"
        min="30"
        max="200"
        placeholder="Pulse"
        value={input.pulse || ""}
        onChange={handleChange}
        name="pulse"
        required
      />
      <AddToListTextArea
        placeholder="Note"
        onChange={handleChange}
        name="note"
      />
      <AddToListBtn>
        Add to List{" "}
      </AddToListBtn>
    </AddToList1>
  );
};

export default AddToList;
