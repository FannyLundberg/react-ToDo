import React from "react";
import styled from "styled-components";
import { ToDo } from "../models/ToDo";

interface IPrintToDoProps {
    toDo: ToDo;
    toggleDone(toDo: ToDo): void;
}

const DoneToDo = styled.div`
    text-decoration: line-through;
    color: white;
`;

const NotDoneToDo = styled.div`
    color: pink;
`;

export function PrintToDo(props: IPrintToDoProps) {

    function handleClick() {
        props.toggleDone(props.toDo)
    };

    return (
        <React.Fragment>
            {props.toDo.done ? (
                <DoneToDo onClick={handleClick}>{props.toDo.text}</DoneToDo>
            ) : (
                <NotDoneToDo onClick={handleClick}>{props.toDo.text}</NotDoneToDo>
            )}
        </React.Fragment>
    );
};