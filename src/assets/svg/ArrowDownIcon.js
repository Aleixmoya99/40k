import React from "react";

function ArrowDownIcon({styles, id}) {
  return (
    <svg id={id} className={styles} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <path
        fill="#6f7d8b"
        fillRule="evenodd"
        d="M8.707 10.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default ArrowDownIcon;
