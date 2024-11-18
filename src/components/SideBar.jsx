export default function SideBar({ onStartAddProject, projectsState, onSelectProject }) {
  return (
    <aside className="h-[97%] absolute flex flex-col w-full bottom-0 bg-gray-900 rounded-se-xl" aria-label="projects Section">
      <header className="text-center p-3.5">
        <h2 className="text-2xl font-semibold text-gray-50">projects</h2>
      </header>
      <section className="px-10">
        <button
          className="w-full bg-gray-400 py-1 rounded-md font-medium cursor-pointer text-gray-900"
          aria-label="Add Project"
          onClick={onStartAddProject}
        >
          + Add a Project
        </button>
      </section>
      <ul className="flex h-full flex-col p-10 overflow-y-auto text-center text-gray-50 gap-2" aria-label="Projects List">
        {
          projectsState?.projects.length ?
            projectsState?.projects.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="cursor-pointer bg-gray-50 bg-opacity-10 p-1 rounded-md"
                  onClick={() => onSelectProject(item.id)}
                >
                  <p className="text-white break-all">{item?.title}</p>
                </li>
              )
            })
            :
            <div>
              < p className="text-center font-medium">Nothing</p>
              <small>Add your first task</small>
            </div>
        }
      </ul>
    </aside >
  )
}
