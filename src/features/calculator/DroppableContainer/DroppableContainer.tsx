import { useDroppable } from '@dnd-kit/core';
import { FC, PropsWithChildren } from 'react'

const DroppableContainer: FC<PropsWithChildren<unknown>> = ({children}) => {
  const { setNodeRef: setNodeRefDroppable } = useDroppable({
    id: "droppable",
  });
  return <main ref={setNodeRefDroppable}>
    {children}
</main>
}

export default DroppableContainer