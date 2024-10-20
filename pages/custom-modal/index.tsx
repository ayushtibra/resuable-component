import Modal from "@/components/Modal";
import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'

const CustomModal = () => {
    const [open, setOpen] = useState(false);

    const openModal = (e: React.MouseEvent) => {
        // e.stopPropagation(); // Prevent event from bubbling to window - or add a timer in modal component
        setOpen(true);
      };

    const handleModalState = () => {
        setOpen(false);
    }

    return (
        <div className="flex flex-col justify-center text-center p-4">
            <p>Modal Component</p>
            <button onClick={openModal} className="py-4">Open Modal</button>
            <Modal
                isOpen={open}
                allowScroll={false}
                outsideClickModalClose={true}
                handleClose={handleModalState}
                className='customClass'
            >
                <div className="modal">
                    <div className="absolute right-0 top-0 pr-2 pt-4 sm:block">
                        <button
                            type="button"
                            onClick={handleModalState}
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="sr-only">Close</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="modal-header border-b border-solid border-gray mb-4 flex justify-between pb-2">
                        <span>Modal Header</span>
                    </div>
                    <div className="base-content max-w-[400px]">
                        <p>Modal content written here</p>
                    </div>
                    <div className="btn-group flex justify-between gap-5 mt-4">
                        <button
                            type="button"
                            onClick={handleModalState}
                            className="w-[48%] rounded bg-white p-3 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="w-[48%] rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </Modal>
            <p>Modal Component Modal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal Component</p>
            <p>Modal Component Modal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal Component</p>
            <p>Modal Component Modal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal Component</p>
            <p>Modal Component Modal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal Component</p>
            <p>Modal Component Modal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal Component</p>
            <p>Modal Component Modal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal ComponentModal Component</p>
        </div>
    )
}

export default CustomModal;