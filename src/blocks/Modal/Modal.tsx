import React, { ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";
import { ParentProps } from "../../types/props";
import "./Modal.scss";

interface ModalProps extends ParentProps {
  modalOpen: boolean;
  closeModal: () => void;
}

/**
 * Modal block component
 *
 * Generates a modal that will appear as a popup and then passes in
 * a supplied child component to display to the user
 *
 * The modal is created using createPortal and added inside the
 * document.body.
 */
function Modal({ modalOpen, closeModal, children }: ModalProps): ReactElement {
  /**
   * Function to allow the user to scroll again when modal is about to be closed
   */
  function restoreScroll(): void {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }

  /**
   * remove the scroll bar while the modal is open, and restore it when it is unmounted
   */
  useEffect((): (() => void) => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      restoreScroll();
    }

    return (): void => restoreScroll();
  }, [modalOpen]);

  return createPortal(
    modalOpen && (
      <div
        // close the modal when the modal background is clicked
        onClick={closeModal}
        className={`modal-background ${!modalOpen ? "display-none" : ""}`}
      >
        <div
          // Prevent closing the modal when clicking on modal content
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className="modal-background__modal-content"
        >
          {children}
        </div>
      </div>
    ),
    document.body
  );
}

export default Modal;
