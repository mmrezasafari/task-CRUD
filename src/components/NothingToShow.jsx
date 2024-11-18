export default function NothingToShow({ children }) {
  return (
    <section className="my-3">
      <h2 className="text-center text-2xl font-medium mb-3">There is nothing to show</h2>
      {children}
    </section>
  )
}
