import NewTask from "./NewTask.jsx"
import NothingToShow from "./NothingToShow.jsx"

export default function Tasks({ tasks, projectId, onAddTask, onDoneTask, onDeleteTask }) {

  const selectedTask = []
  tasks?.map((item) => {
    if (item.projectId === projectId) {
      selectedTask.push(item)
    }
  })

  return (
    <>
      <section className="flex items-center mt-5">
        <NewTask onAddTask={onAddTask} />
      </section>
      <ul className="mt-5 overflow-y-auto overflow-x-hidden">
        {
          selectedTask.length ?
            selectedTask.map((task, index) => {
              return (
                <li className="flex w-full items-center justify-between mb-2 border-b border-gray-900 py-2 gap-2" key={`${index}_${task.title}-${projectId}`}>
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="h-6 w-6" onChange={() => onDoneTask(task)} />
                    <h1 className="font-medium text-wrap break-all">{task.title}</h1>
                  </div>
                  <button
                    className="h-fit bg-red-600 p-1 text-sm rounded-md font-medium cursor-pointer text-gray-50 hover:bg-red-500 hover:text-gray-900"
                    onClick={() => onDeleteTask(task)}
                  >
                    Delete
                  </button>
                </li>
              )
            })
            : <NothingToShow>
              <p className="text-md text-center">add a task</p>
            </NothingToShow>
        }
      </ul>
    </>
  )
}
