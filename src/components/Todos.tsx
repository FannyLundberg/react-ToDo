import React, { useEffect } from "react";
import { useState } from "react";
import { ToDo } from "../models/ToDo";
import { AddToDo } from "./AddToDo";
import { PrintToDo } from "./PrintToDo";

export function Todos() {

    const [toDos, setToDos] = useState<ToDo[]>([]);
    let toDoList: ToDo[] = [];


    useEffect(() => {
        let thingToLs = localStorage.getItem("toDoList") || "[]";
        toDoList = JSON.parse(thingToLs);

        setToDos(toDoList);

        console.log(toDos)
        console.log(toDoList)
    }, []);


    function toggleDone(toggleToDo: ToDo) {
        toggleToDo.done = !toggleToDo.done;

        setToDos([...toDos]);
        console.log(toDos)
    };


    function save(ToDo: ToDo) {
        let todo = ToDo;  

        setToDos([...toDos, ToDo])

        let thingToLs = localStorage.getItem("toDoList") || "[]";
        toDoList = JSON.parse(thingToLs);

        toDoList.push(todo);
        localStorage.setItem("toDoList", JSON.stringify(toDoList));

        console.log(toDos)
        console.log(toDoList)
    };


    let printList = toDos.map((toDo: ToDo, i: number) => {
        return <PrintToDo key={i} toDo={toDo} toggleDone={toggleDone}></PrintToDo>
    })


    return (
        <React.Fragment>
            <AddToDo saveToDo={save}></AddToDo>
            <div id="divToDo">{printList}</div>
        </React.Fragment>
    );
};