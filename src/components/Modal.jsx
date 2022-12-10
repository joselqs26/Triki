import React from "react";
import ReactDOM from "react-dom";

import "../index.css";

function Modal({ openModal, children }) {
  return ReactDOM.createPortal(
    <div className={`bg-modal ${openModal ? "display" : "noDisplay"}`}>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
