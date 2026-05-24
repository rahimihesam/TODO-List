import React from 'react'
import '../../styles/AddTaskForm.css'
import {FaCirclePlus} from "react-icons/fa6";

const AddTaskForm = () => (
    <div className="w-full mb-8">
        <form action="" className="flex">
            <input type="text"
                   className="w-full h-12 text-2xl border-green-200 border p-1 focus:border-green-500 outline-none"
                   placeholder="Write"/>
            <button type="submit"
                    className="h-12 text-2xl border border-green-50 bg-green-200 hover:border-green-500 hover:bg-white transition">
                <FaCirclePlus className="w-10 h-10 p-2 hover:text-green-500" />
            </button>
        </form>
    </div>
)

export default AddTaskForm