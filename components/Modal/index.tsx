import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
    isOpen: boolean;
    allowScroll?: boolean;
    className?: string;
    outsideClickModalClose?: boolean;
    handleClose?(): void;
    children: React.ReactNode;
}

const Modal = ({ 
    isOpen, 
    allowScroll = true, 
    className = '', 
    handleClose, 
    outsideClickModalClose = false, 
    children 
}: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const outsideClickHandler = (e: MouseEvent) => {            
            // Check if the click is outside the modal content
            if (ref.current && !ref.current.contains(e.target as Node)) {                
                if (handleClose) {
                    handleClose(); // Call the handleClose function
                } else{
                    console.log('Please provide close handle function or see docs')
                }
            }
        };

        let timer: NodeJS.Timeout;
        if (isOpen && outsideClickModalClose) {
            timer = setTimeout(() => {
                window.addEventListener('click', outsideClickHandler);
            }, 100); // Delay the event listener by 100ms - so that when modal open through button it'll not trigger
        }

        return () => {
            clearTimeout(timer); // Clear the timeout if component unmounts
            window.removeEventListener('click', outsideClickHandler);
        };
    }, [isOpen, handleClose, outsideClickModalClose]);

    // Stop scrolls of body when modal opens
    useEffect(() => {
        if(isOpen && !allowScroll){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    },[isOpen, allowScroll])

    if (!isOpen) {
        return null;
    }

    return (
        <>
            {createPortal(
                <div className={`${className} modal-overlay fixed w-full h-full top-0 left-0 bg-[rgba(255,255,255,0.2)] overflow-auto`}>
                    <div 
                        ref={ref} 
                        className="modal-content w-full max-w-[80%] lg:max-w-[400px] absolute bg-white text-black p-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] overflow-auto">
                        {children}
                    </div>
                </div>,
                document.getElementById('myportal')!
            )}
        </>
    );
};

export default Modal;
