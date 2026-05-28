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
    const [filter, setFilter] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [refreshTasks, setRefreshTasks] = useState(0);

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

    useEffect(() => {
        if (filter === 'all') {
            setFilteredTasks(tasks);
        }
        if (filter === 'completed') {
            const newCompletedTasks = tasks.filter(task => task.status)
            setFilteredTasks(newCompletedTasks);
        }
        if (filter === 'active') {
            const newActiveTasks = tasks.filter(task => !task.status)
            setFilteredTasks(newActiveTasks);
        }
    }, [filter, tasks, refreshTasks]);

    const addTask = (taskTitle) => {
        setTasks([...tasks, {
            id: uuidv4(),
            title: taskTitle,
            status: false,
        }]);
    }

    const deleteTask = (taskId) => {
        let newTasksList = tasks;
        delete newTasksList(tasks.findIndex((task) => task.id === taskId))
        newTasksList = newTasksList.filter((item) => item)
        setTasks(newTasksList)
    }

    const handelChangeStatus = (taskId) => {
        let newTasksList = tasks;
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        newTasksList = [taskIndex].status = !newTasksList[taskIndex].status;
        setTasks(newTasksList)
        setRefreshTasks(refreshTasks + 1)
    }

    return (
        <div className="m-auto max-w-2xl min-h-80">
            <AddTaskForm addTask={addTask}/>
            <TaskList tasks={filteredTasks} deleteTask={{deleteTask}} handelChangeStatus={handelChangeStatus}/>
            <FilterFooter updateFilter={setFilter} tasks={filteredTasks}/>
        </div>
    )
}

export default TodoApp