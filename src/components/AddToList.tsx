import React, {useState} from "react";    
import { useDispatch } from "react-redux/es/exports"; 
import { addTask } from "./Slice";
import { nanoid } from "@reduxjs/toolkit";


const AddToList = () => {
    const [input, setInput] = useState({
        up: undefined,
        down: undefined,
        pulse: undefined,
        note: "",
    })
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>  {
setInput({
    ...input,
    [e.target.name]: e.target.value
})
    }

    const handleClick = (): void =>  {
       if (
        !input.up || !input.down || !input.pulse
       ){
        return
       }
dispatch(
      addTask({
        key: nanoid(),
        up: input.up,
        down: input.down,
        pulse: input.pulse,
       note: input.note,
      })
    );

       setInput({
        up: undefined,
        down: undefined,
        pulse: undefined,
        note: "",
       })
            }
        

    return (
        <div className="AddToList">
            <input type="number"
            placeholder="Up"
            className="AddToList-input"
            value={input.up}
            onChange={handleChange}
            name="up"
             />
              <input type="number"
            placeholder="Down"
            className="AddToList-input"
            value={input.down}
            onChange={handleChange}
            name="down"
             />
                 <input type="number"
            placeholder="Pulse"
            className="AddToList-input"
            value={input.pulse}
            onChange={handleChange}
            name="pulse"
             />
              <textarea
            placeholder="Note"
            className="AddToList-input"
            onChange={handleChange}
            name="note"
             />
             <button
             className="AddToList-btn"
             onClick={handleClick}
             >Add to List </button>
        </div>
    )
    }

export default AddToList;