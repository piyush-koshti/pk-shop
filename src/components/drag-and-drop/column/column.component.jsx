import React from "react";
import TaskCard from "../task-card/task-card.component";
import { useDroppable } from "@dnd-kit/core";

const Column = (props) => {
    const { column, tasks } = props;
    const { setNodeRef } = useDroppable({
        id: column.id
    })
    
    return (
        <div className="d-flex flex-column rounded bg-dark p-4" style={{ width: '15rem' }}>
            <h2 className="mb-4 fw-semibold text-light text-center">{column.title}</h2>
            <div ref={setNodeRef} className="d-flex flex-column flex-grow-1 gap-4">
                {tasks && tasks.map((task) => {
                    return <TaskCard key={task.id} task={task} />
                })}
            </div>
        </div>
    );
}

export default Column;