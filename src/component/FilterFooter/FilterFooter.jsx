import React from 'react'

const FilterFooter = () => (
    <div className="w-full flex bg-green-200 p-3">
        <div className="w-full flex items-center">
            2 items
        </div>
        <div className="w-full">
            <ul className="w-full flex items-center justify-end flex-row h-9">
                <li>
                    <button className="p-2 hover:bg-white transition cursor-pointer active:bg-blue-500">All</button>
                </li>
                <li>
                    <button className="p-2 hover:bg-white transition cursor-pointer active:bg-blue-500">Active</button>
                </li>
                <li>
                    <button className="p-2 hover:bg-white transition cursor-pointer active:bg-blue-500">Completed</button>
                </li>
            </ul>
        </div>
    </div>
)
export default FilterFooter