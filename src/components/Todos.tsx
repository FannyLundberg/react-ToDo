import React from "react";
import { useState } from "react";
import { ToDo } from "../models/ToDo";
import { AddToDo } from "./AddToDo";
import { PrintToDo } from "./PrintToDo";

export function Todos() {

    const [toDos, setToDos] = useState<ToDo[]>([
        new ToDo ("Ta helg"),
        new ToDo ("Njuta av helgen"),
    ]);

    function toggleDone(toggleToDo: ToDo) {
 
        toggleToDo.done = !toggleToDo.done;

        setToDos([...toDos]);
    }

    let printHtml = toDos.map((toDo: ToDo, i: number) => {
        return <PrintToDo key={i} toDo={toDo} toggleDone={toggleDone}></PrintToDo>
    })

    return (
        <React.Fragment>
            <AddToDo></AddToDo>
            <div>{printHtml}</div>
        </React.Fragment>
    );
};