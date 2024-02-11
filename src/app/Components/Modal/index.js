import React, { useEffect, useRef } from "react"

const ModalK = ({ children, onClose }) => {
  // const ref = useRef()
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       onClose()
  //     }
  //   }
  //   document.addEventListener("mou", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mou", handleClickOutside)
  //   }
  // }, [onClose])
  return (
    <div
      className="fixed w-screen h-screen z-[1000] flex items-center justify-center top-0"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-[#fff] p-5 max-h-[80vh] border shadow-2xl transition-all duration-300">
        {children}
      </div>
    </div>
  )
}

export default ModalK
