import React from "react";

function Links(props) {
  return (
    <div>
      <div id={props.id} className="links">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.linkText}
        </a>
      </div>
    </div>
  );
}

export default Links;
