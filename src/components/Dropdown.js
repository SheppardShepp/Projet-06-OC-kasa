import React, { useState } from "react";

// gestion des collapse et leur déroulé
function Dropdown(props) {
  // par défault les collapses sont fermé
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse_style sizeAPropos sizeLogement">
      <div className="collapse_style_colorTitle" onClick={() => setOpen(!open)}>
        <p>{props.title}</p>
        <i
          className={
            "fa-solid fa-chevron-up dropdown" +
            (open ? " dropdown-active" : " dropdown-inactive")
          }
        ></i>
      </div>
      {open &&
        (Array.isArray(props.description) ? (
          <ul className="collapse_style_colorList">
            {props.description.map((list, id) => (
              <li key={id}>{list}</li>
            ))}
          </ul>
        ) : (
          <p className="collapse_style_colorDescription">{props.description}</p>
        ))}
    </div>
  );
}

export default Dropdown;
