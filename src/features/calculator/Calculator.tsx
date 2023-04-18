import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { calculatorSlice } from "./calculatorSlice";
import "./Calculator.css";
import { DndContext } from "@dnd-kit/core";
import DroppableContainer from "./DroppableContainer/DroppableContainer";
import DraggableElement from "./DraggableElement/DraggableElement";

export const Calculator: React.FC<any> = (props): JSX.Element => {

  const {text, position} = useAppSelector((state) => state.calculatorSlice);
  const { setText, setPosition } = calculatorSlice.actions;
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLButtonElement;
    if (el.name === "Clear") {
      return dispatch(setText(""));
    }
    if (el.name === "C") {
      return dispatch(setText(text.toString().slice(0, -1)));
    }
    if (el.name === "=") {
      try {
        dispatch(setText(eval(text)));
      } catch (error) {
        dispatch(setText("Erorr"));
      }
      return;
    }
    if (el.tagName === "BUTTON") {
      return print(el.name);
    }
    function print(op: string) {
      const lastChar = text[text.length - 1];
      if (
        (lastChar === "/" ||
          lastChar === "*" ||
          lastChar === "+" ||
          lastChar === "-") &&
        /[+\-*/]/.test(op)
      ) {
        dispatch(setText(text.slice(0, -1).toString().concat(op)));
      } else {
        dispatch(setText(text.toString().concat(op)));
      }
    }
  };

  const handleDragEnd = (event: any) => {
    console.log(event);
    const {delta} = event;
    dispatch(setPosition({x: delta.x, y: delta.y}))
  };

  

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <DroppableContainer>
        <DraggableElement text={text} handleClick={handleClick} position={position}></DraggableElement>
      </DroppableContainer>
    </DndContext>
  );
};
