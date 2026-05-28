import React,{useState} from 'react'
import '../../styles/AddTaskForm.css'
import {FaCirclePlus} from "react-icons/fa6";

const AddTaskForm = ({addTask}) => {
    const [value, setValue] = useState('')
    const handlechange = (event) => {
        if (event) event.preventDefault()
        setValue(event.target.value)
    }
    const handleSubmit = (event) => {
        if (event) event.preventDefault()
        if (!value || value === "") {
            return
        }
        addTask(value)
    }
    return (
        <div className="w-full mb-8">
            <form action="" className="flex" onSubmit={handleSubmit}>
                <input type="text"
                       className="w-full h-12 text-2xl border-green-200 border p-1 focus:border-green-500 outline-none"
                       placeholder="Write"
                onChange={handlechange}/>
                <button type="submit"
                        className="h-12 text-2xl border border-green-50 bg-green-200 hover:border-green-500 hover:bg-white transition">
                    <FaCirclePlus className="w-10 h-10 p-2 hover:text-green-500" />
                </button>
            </form>
        </div>
    )
}

export default AddTaskForm