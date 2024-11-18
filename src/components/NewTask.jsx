import { useRef, useState } from "react"
import Input from "./Input"

export default function NewTask({ onAddTask }) {
  const [newTaks, setNewTask] = useState(false)
  const taskTitleRef = useRef()

  return (
    <div className="flex w-full gap-2 h-10">
      <button
        className="text-nowrap px-5 bg-gray-900 rounded-md font-medium cursor-pointer text-gray-100"
        onClick={() => setNewTask(true)}
      >
        + Add a Task
      </button>

      {
        newTaks ?
          <>
            <Input lable="title" ref={taskTitleRef} required />
            <div className="flex gap-2 justify-end">
              <button
                className="bg-green-600 px-5 py-1 rounded-md font-medium cursor-pointer text-gray-50 hover:bg-green-500 hover:text-gray-900"
                onClick={() => onAddTask(taskTitleRef.current.value)}
              >
                Save
              </button>
              <button
                className="bg-red-600 px-5 py-1 rounded-md font-medium cursor-pointer text-gray-50 hover:bg-red-500 hover:text-gray-900"
                onClick={() => setNewTask(false)}
              >
                Cancel
              </button>
            </div>
          </>
          : null
      }
    </div>
  )
}
