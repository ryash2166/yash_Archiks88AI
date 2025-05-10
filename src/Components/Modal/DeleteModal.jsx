import React from 'react'

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

  return (
    <div
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-[6px]"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="bg-white dark:bg-primary rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
          <div className="p-6 flex flex-col items-center">
            <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full border-2 border-red-500">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-red-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8V20.5C6 21.3284 6.67157 22 7.5 22H16.5C17.3284 22 18 21.3284 18 20.5V8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 4.5V4C14 3.44772 13.5523 3 13 3H11C10.4477 3 10 3.44772 10 4V4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 12V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 12V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2 text-center dark:text-white">
              Are you sure want to delete?
            </h2>
            <div className="flex gap-4 mt-6 w-full">
              <button
                onClick={onClose}
                className="flex-1 py-3 text-center text-blue font-medium bg-transparent border border-transparent hover:underline rounded-lg"
              >
                Close
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 py-3 text-center text-white font-medium bg-[#e85c4a] hover:bg-[#d14e3c] transition rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DeleteModal