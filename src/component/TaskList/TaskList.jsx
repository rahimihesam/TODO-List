import React from 'react'
import {TaskItem} from "../index";

const TaskList = ({tasks, deleteTask , handelChangeStatus}) => (
    <div className="w-full  ">
        <ul>
            {tasks.map((task => (
                <TaskItem key={`task-${task.id}`} task={task} deleteTask={deleteTask}
                          handelChangeStatus
                />)))}
        </ul>
    </div>
)
export default TaskList