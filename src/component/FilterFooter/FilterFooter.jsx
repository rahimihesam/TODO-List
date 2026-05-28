import React, {useState} from 'react'

const FilterFooter = ({tasks , updateFilter}) => {
    const [filter, setFilter] = useState('all')
    const handelfilter = (filterName) => {
        setFilter(filterName)
        updateFilter(filterName)
    }

    return (
        <div className="w-full flex bg-green-200 p-3">
            <div className="w-full flex items-center">
                {tasks.length} items
            </div>
            <div className="w-full">
                <ul className="w-full flex items-center justify-end flex-row h-9">
                    <li>
                        <button onClick={() => handelfilter('all')}
                                className="p-2 hover:bg-white transition cursor-pointer active:bg-blue-500">
                            All
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handelfilter('active')}
                                className="p-2 hover:bg-white transition cursor-pointer active:bg-blue-500">
                            Active
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handelfilter('completed')}
                                className="p-2 hover:bg-white transition cursor-pointer active:bg-blue-500">
                            Completed
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default FilterFooter