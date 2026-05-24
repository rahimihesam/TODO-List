import React from 'react'
import '../../styles/TodoApp.css';
import {
    AddTaskForm,
    FilterFooter,
    TaskList
} from "../";

const TodoApp = () => (
    <div className="m-auto max-w-2xl min-h-80">
        <AddTaskForm/>
        <TaskList/>
        <FilterFooter/>
    </div>
)

export default TodoApp