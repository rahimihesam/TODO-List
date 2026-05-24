import React from 'react'
import {TaskItem} from "../index";

const TaskList = () => (
    <div className="w-full  ">
        <ul>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </ul>
    </div>
)
export default TaskList