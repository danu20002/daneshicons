import React from 'react';

export const iconData = {
  "id": "XantoGoblet",
  "name": "XantoGoblet",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.12 3.25 L 20.75 10.12 L 13.88 20.75 L 3.25 13.88 Z"
      }
    ]
  ]
};

export const XantoGoblet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.12 3.25 L 20.75 10.12 L 13.88 20.75 L 3.25 13.88 Z" />
      {children}
    </svg>
  );
});

export default XantoGoblet;
