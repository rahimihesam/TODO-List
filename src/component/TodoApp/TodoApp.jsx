import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import '../../styles/TodoApp.css';
import {
    AddTaskForm,
    FilterFooter,
    TaskList
} from "../";

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks([
            {
                id: uuidv4(),
                title: 'Default 1',
                status: true,
            },
            {
                id: uuidv4(),
                title: 'Default 2',
                status: false,
            },

        ])
    }, [])

    const addTask = (taskTitle) => {
        setTasks([...tasks, {
            id: uuidv4(),
            title: taskTitle,
            status: false,
        }]);
    }

    function deleteTask(taskId) {
        let newTasksList = tasks
        delete newTasksList(tasks.find((task) => task.id === taskId))
        newTasksList.filter((item) => item)
        setTasks(newTasksList)
    }

    return (
        <div className="m-auto max-w-2xl min-h-80">
            <AddTaskForm addTask={addTask}/>
            <TaskList tasks={tasks} deleteTask={{deleteTask}}/>
            <FilterFooter tasks={tasks}/>
        </div>
    )
}

export default TodoApp