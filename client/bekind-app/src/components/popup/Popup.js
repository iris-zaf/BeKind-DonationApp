import React from "react";
import "../popup/Popup.css";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button className="x" onClick={() => props.setTrigger(false)}>
          ❌
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
