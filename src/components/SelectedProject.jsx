export default function SelectedProject({ selectedProject }) {
  const formattedDate = new Date(selectedProject?.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div>
      <header className="flex justify-between border-b border-gray-900 p-2">
        <h2 className="">
          <span className="text-xl font-semibold">{selectedProject?.title}</span>
          <span className="text-md"> ({selectedProject?.description})</span>
        </h2>
        <p>{formattedDate}</p>
      </header>
    </div>
  )
}
