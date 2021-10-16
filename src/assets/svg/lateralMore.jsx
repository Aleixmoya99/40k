import React from "react";

function LateralMore({styles, onClick, id}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 426.667 426.667"
      version="1.1"
      viewBox="0 0 426.667 426.667"
      xmlSpace="preserve"
	    id={id}
	    className={styles}
      onClick = {onClick} 
    >
      <circle cx="42.667" cy="213.333" r="42.667"></circle>
      <circle cx="213.333" cy="213.333" r="42.667"></circle>
      <circle cx="384" cy="213.333" r="42.667"></circle>
    </svg>
  );
}

export default LateralMore;
