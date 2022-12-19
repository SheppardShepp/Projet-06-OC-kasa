import React from "react";

//fonction qui retourne autant de tag qu'il y en a de le fichier json
function Tag(props) {
  return (
    <>
      {props.tags.map((tag, id) => (
        <div className="designTag" key={id}>
          <p>{tag}</p>
        </div>
      ))}
    </>
  );
}

export default Tag;
