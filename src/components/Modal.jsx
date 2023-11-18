import React from "react";
import { createPortal } from "react-dom";

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div  className=" grid absolute top-0 backdrop-blur w-screen h-screen z-40 place-items-center">
        <div className="relative z-50 min-h-[250px] max-w-[100%] bg-white rounded-lg p-4 m-auto">
           <div >
           <img onClick={onClose} width="24" height="24" src="https://img.icons8.com/material-outlined/24/delete-sign.png" alt="delete-sign" className="cursor-pointer"/>
           </div>
           {children}
            </div>
            </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
