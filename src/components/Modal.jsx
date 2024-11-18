import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button
          className="text-nowrap px-5 py-1 bg-gray-900 rounded-md font-medium cursor-pointer text-gray-100"
        >
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById('root')
  )
})

export default Modal
