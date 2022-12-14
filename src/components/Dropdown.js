import React, { useState } from "react";

// gestion des collapse et leur déroulé
function Dropdown(props) {
  // par défault les collapses sont fermé
  const [open, setOpen] = useState(false);

  // -------------- test mappage desription-------------
  // const equipeTab = () => {

  //---------------------------------------
  //-------------1eme test-----------------
  // if (typeof props.description === "string") {
  //   return (
  //     <p className="collapse_size_colorDescription">{props.description}</p>
  //   );
  // } else {
  //   return (
  //     <ul>
  //       {props.description.map((list, id) => (
  //         <li className="" key={id}>
  //           {list}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  //---------------------------------------
  //-------------2eme test-----------------
  //   return Array.isArray(props.description) ? (
  //     <ul>
  //       {props.description.map((list, id) => (
  //         <li className="" key={id}>
  //           {list}
  //         </li>
  //       ))}
  //     </ul>
  //   ) : (
  //     <p className="collapse_size_colorDescription">{props.description}</p>
  //   );

  // };

  return (
    <div className="collapse_size">
      <div className="collapse_size_colorTitle" onClick={() => setOpen(!open)}>
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
          <ul>
            {props.description.map((list, id) => (
              <li className="" key={id}>
                {list}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse_size_colorDescription">{props.description}</p>
        ))}
    </div>
  );
}

export default Dropdown;
