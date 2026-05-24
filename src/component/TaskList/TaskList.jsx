import React from 'react'
import {TaskItem} from "../index";

const TaskList = ({tasks , deleteTask}) => (
    <div className="w-full  ">
        <ul>
            {tasks.map((task => <TaskItem task={task} deleteTask={deleteTask}/>))}
        </ul>
    </div>
)
export default TaskList