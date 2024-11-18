import { forwardRef } from "react"

const Input = forwardRef(function Input({ label, inputId, InputTag = 'input', ...props }, ref) {
  return (
    <>
      <label className="font-medium text-gray-900" htmlFor={inputId}>{label}</label>
      <InputTag
        ref={ref}
        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:border-gray-900 block w-full p-2.5"
        id={inputId}
        {...props}
      />
    </>
  )
})

export default Input
