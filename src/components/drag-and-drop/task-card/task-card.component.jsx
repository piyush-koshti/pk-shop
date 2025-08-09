import { useDraggable } from "@dnd-kit/core";
import React from "react";

const TaskCard = ({ task }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        // transform: `translate(${transform.x}px, ${transform.y}px)`,
    } : undefined;

    return (
        <div 
            ref={setNodeRef} 
            {...listeners} 
            {...attributes}
            className="bg-light p-3 rounded"
            style={style}
        >
            <h5>{task.title}</h5>
            <p>{task.description}</p>
        </div>
    )
}

export default TaskCard;