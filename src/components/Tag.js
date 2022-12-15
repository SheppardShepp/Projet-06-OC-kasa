import React from "react";

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
