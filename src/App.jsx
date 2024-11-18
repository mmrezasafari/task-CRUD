import './App.css'
import { useRef, useState } from 'react'
import NothingToShow from './components/NothingToShow.jsx'
import SideBar from './components/SideBar.jsx'
import NewProject from './components/NewProject.jsx'
import SelectedProject from './components/SelectedProject.jsx'
import Tasks from './components/Tasks.jsx'
import Modal from './components/Modal.jsx'


function App() {
  let mainContent
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })
  const modal = useRef()

  const handleStartAddProject = () => {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    })
  }

  const handleAddProject = (data) => {
    if (data.title.trim() && data.description.trim() && data.date.trim()) {
      const projectId = Math.random()
      const newProject = {
        ...data,
        id: projectId
      }

      setProjectsState(prev => {
        return {
          ...prev,
          selectedProjectId: undefined,
          projects: [...prev.projects, newProject]
        }
      })
    } else {
      modal.current.open()
    }
  }

  const handleCancelAddProject = () => {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectProject = (selectedProjectId) => {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: selectedProjectId
      }
    })
  }

  const handleAddTask = (task) => {
    if (task.trim()) {
      const newObj = {
        ...projectsState,
        tasks: [...(projectsState.tasks || []), { title: task, projectId: projectsState.selectedProjectId, done: false }]
      }

      setProjectsState(newObj)
    } else {
      modal.current.open()
    }
  }

  const handleDoneTask = (taskObj) => {
    setProjectsState((prevObj) => ({
      ...prevObj,
      tasks: prevObj.tasks.map((task) =>
        task.title === taskObj.title
          ? { ...task, done: !task.done } // Toggle the done property
          : task
      ),
    }));
  }

  const handleDeleteTask = (taskObj) => {
    setProjectsState((prevObj) => ({
      ...prevObj,
      tasks: prevObj.tasks.filter((task) => task.title !== taskObj.title)
    }));
  }

  switch (projectsState.selectedProjectId) {
    case undefined: {
      mainContent = (
        <NothingToShow>
          <p className='text-md'>Select a project from the list of projects or add a project if you don&apos;t have one yet</p>
        </NothingToShow>
      )
      break;
    }
    case null:
      mainContent = <NewProject onAddProject={handleAddProject} onCancelAddProject={handleCancelAddProject} />
      break;
    default: {
      const selectedProject = projectsState?.projects.find(project => project.id === projectsState.selectedProjectId)
      mainContent = (
        <div className='flex flex-col w-3/4 h-[90%]'>
          <SelectedProject selectedProject={selectedProject} />
          <Tasks
            tasks={projectsState.tasks}
            projectId={selectedProject.id}
            selectedProject={selectedProject.id}
            onAddTask={handleAddTask}
            onDoneTask={handleDoneTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      )
      break;
    }
  }

  return (
    <>
      <main className='h-screen flex gap-5'>
        <div className='relative basis-1/4 h-screen'>
          <SideBar onStartAddProject={handleStartAddProject} projectsState={projectsState} onSelectProject={handleSelectProject} />
        </div>
        <div className='basis-3/4 flex justify-center items-center'>
          {
            mainContent
          }
        </div>
        <Modal ref={modal} buttonCaption="Okay">
          <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
          <p className="text-stone-600 mb-4">
            Oops ... looks like you forgot to enter a value.
          </p>
          <p className="text-stone-600 mb-4">
            Please make sure you provide a valid value for every input field.
          </p>
        </Modal>
      </main>
    </>
  )
}

export default App
