import React, { ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";
import { ParentProps } from "../../types/props";
import "./Modal.scss";

interface ModalProps extends ParentProps {
  modalOpen: boolean;
  closeModal: () => void;
}

/**
 * Modal class component
 *
 * Generates a modal that will appear as a popup and then passes in
 * a supplied child component to display to the user
 *
 * The modal is created using createPortal and added inside the
 * document.body.
 *

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
   * Function to close the modal when an element has been clicked
   */
  function closeFromClick(): void {
    restoreScroll();
    closeModal();
  }

  /**
   * window.scrollY is used to prevent the page from scrolling when the modal
   * is visible
   *
   * The scroll-bar is removed by setting the position of the body
   * to fixed, and the current user's position is saved so that they can be
   * returned to it once the modal is closed, without the page jumping to
   * the top
   */
  useEffect((): (() => void) => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      restoreScroll();
    }

    return () => restoreScroll();
  }, [modalOpen]);

  return createPortal(
    modalOpen && (
      <div
        // close the modal when the modal background is clicked
        onClick={closeFromClick}
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
