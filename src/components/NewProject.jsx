import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAddProject, onCancelAddProject }) {

  const titleRef = useRef()
  const descriptionRef = useRef()
  const dateRef = useRef()


  const handleAddTask = () => {
    onAddProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value
    })
  }

  return (
    <section className="flex flex-col w-1/2 gap-5">
      <h1 className="text-center text-xl font-medium text-gray-900">Add new Project</h1>
      <div className="flex flex-col gap-2">
        <Input type="text" inputId="title" label="Title" placeholder="task title" ref={titleRef} />
        <Input type="text" inputId="description" label="Description" InputTag="textarea" placeholder="description" ref={descriptionRef} />
        <Input type="date" inputId="date" label="Due date" ref={dateRef} />
      </div>
      <div className="flex gap-2 justify-end">
        <button
          className="bg-green-600 px-5 py-1 rounded-md font-medium cursor-pointer text-gray-50 hover:bg-green-500 hover:text-gray-900"
          onClick={handleAddTask}
        >
          Save
        </button>
        <button
          className="bg-red-600 px-5 py-1 rounded-md font-medium cursor-pointer text-gray-50 hover:bg-red-500 hover:text-gray-900"
          onClick={onCancelAddProject}
        >
          Cancel
        </button>
      </div>
    </section >
  )
}
