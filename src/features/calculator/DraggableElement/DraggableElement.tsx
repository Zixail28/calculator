import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";

const DraggableElement: FC<any> = ({ handleClick, text, position }) => {
  const {
    listeners,
    attributes,
    setNodeRef: setNodeRefDraggable,
    transform,
  } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x + position.x}px, ${transform.y + position.y}px, 0)`,
      }
    : {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    };

  return (
    <div
      className="calculator-container"
      ref={setNodeRefDraggable}
      style={style}
    >
      <div className="handler" {...attributes} {...listeners}></div>
      <div className="container" onDragStart={(e) => console.log(e)}>
        <input type="text" value={text} readOnly={true} />
        <div className="keypad" onMouseDown={handleClick}>
          <button name="Clear">Clear</button>
          <button name="C">C</button>
          <button name="/">&divide;</button>
          <button name="7">7</button>
          <button name="8">8</button>
          <button name="9">9</button>
          <button name="*">&times;</button>
          <button name="4">4</button>
          <button name="5">5</button>
          <button name="6">6</button>
          <button name="-">&ndash;</button>
          <button name="1">1</button>
          <button name="2">2</button>
          <button name="3">3</button>
          <button name="+">+</button>
          <button name="0">0</button>
          <button name=".">.</button>
          <button name="=">=</button>
        </div>
      </div>
    </div>
  );
};

export default DraggableElement;
