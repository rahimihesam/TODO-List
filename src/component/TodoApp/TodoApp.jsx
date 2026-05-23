import React from 'react'
import './TodoApp.css';
import {
    AddTaskForm,
    FilterFooter,
    TaskList
} from "../";

const TodoApp = () => (
    <div className="TodoApp">
        <AddTaskForm/>
        <TaskList/>
        <FilterFooter/>
    </div>
)

export default TodoApp