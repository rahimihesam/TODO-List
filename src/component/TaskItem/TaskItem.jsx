import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const TaskItem = ({task , deleteTask}) => (
    <li className="w-full flex p-6 outline-green-500 border-none outline mb-3 rounded-lg active:bg-green-200">
        <input className="w-7 cursor-pointer p-1 bg-green-200 " type="checkbox" checked={task.status}/>
        <h2 className="w-full">{task.title}</h2>
        <button className="w-7 border-none bg-none cursor-pointer hover:text-green-500 " type="submit" onClick={()=>{deleteTask(task.id)}}>
            <FaRegTrashCan className="w-5 h-5" />
        </button>
    </li>
)
export default TaskItem