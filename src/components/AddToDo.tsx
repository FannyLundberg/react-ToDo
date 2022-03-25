import { ChangeEvent, useState } from "react";

// interface IAddToDoProps {
//     saveToDo();
// }

export function AddToDo() {

    const [toDoText, settoDoText] = useState("");

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        settoDoText(e.target.value)
    }

    function handleClick() {

    }

    return (
        <div>
            <input type="text" onChange={handleInput} value={toDoText} />
            <button type="button" onClick={handleClick}></button>
        </div>
    );
}