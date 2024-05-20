import React, { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ParentProps } from "../../types/props";
import "./Modal.scss";

interface ModalProps extends ParentProps {
  modalOpen: boolean;
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
function Modal({ modalOpen, children }: ModalProps): ReactElement {
  const [scrollPosition, setScrollPosition] = useState<number>(0.0);

  /**
   * window.scrollY is used to prevent the page from scrolling when the modal
   * is visible
   *
   * The scroll-bar is removed by setting the position of the body
   * to fixed, and the current user's position is saved so that they can be
   * returned to it once the modal is closed, without the page jumping to
   * the top
   */
  useEffect((): void => {
    if (modalOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.top = "";
      document.body.style.position = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
      setScrollPosition(0.0);
    }
  }, [modalOpen]);

  return createPortal(
    modalOpen && (
      <div className={`modal-background ${!modalOpen ? "display-none" : ""}`}>
        <div className="modal-background__modal-content">{children}</div>
      </div>
    ),
    document.body
  );
}

export default Modal;
