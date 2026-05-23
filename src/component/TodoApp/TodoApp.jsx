import React from 'react'
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