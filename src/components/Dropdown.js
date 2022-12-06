import React, { useState } from "react";
import collapses from "../data/collapse.json";

function Dropdown() {
  const [open, closed] = useState(false);

  return collapses.map((collapse) => (
    <div
      className="collapse_size"
      key={collapse.id}
      onClick={(key) => closed(!open)}
    >
      <div className="collapse_size_colorTitle">
        <p>{collapse.title}</p>
        <i className="fa-sharp fa-solid fa-chevron-up"></i>
      </div>
      {open && (
        <p className="collapse_size_colorDescription">{collapse.description}</p>
      )}
    </div>
  ));
}

export default Dropdown;
