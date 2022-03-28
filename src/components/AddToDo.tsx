import { ChangeEvent, useState } from "react";
import { ToDo } from "../models/ToDo";

interface IAddToDoProps {
    saveToDo(newToDo: ToDo): void;
}

export function AddToDo(props: IAddToDoProps) {

    const [toDoText, setToDoText] = useState("");


    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setToDoText(e.target.value)
    };


    function handleClick() {
        let toDo = new ToDo(toDoText);
        props.saveToDo(toDo);
        setToDoText("");
    };

    
    return (
        <div>
            <input type="text" onChange={handleInput} value={toDoText} />
            <button type="button" onClick={handleClick}>Lägg till</button>
        </div>
    );
}