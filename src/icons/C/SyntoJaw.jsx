import React from 'react';

export const iconData = {
  "id": "SyntoJaw",
  "name": "SyntoJaw",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.77 8.29 L 20.83 15.58 L 15.71 20.77 L 8.42 20.83 L 3.23 15.71 L 3.17 8.42 L 8.29 3.23 L 15.58 3.17 Z"
      }
    ]
  ]
};

export const SyntoJaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 20.77 8.29 L 20.83 15.58 L 15.71 20.77 L 8.42 20.83 L 3.23 15.71 L 3.17 8.42 L 8.29 3.23 L 15.58 3.17 Z" />
      {children}
    </svg>
  );
});

export default SyntoJaw;
