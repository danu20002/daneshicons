import React from 'react';

export const iconData = {
  "id": "VicinoCement",
  "name": "VicinoCement",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 6.31 L 20.25 6.31 L 20.25 17.69 L 3.75 17.69 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 6.31 L 7.98 2.08 L 24.48 2.08 L 20.25 6.31"
      }
    ],
    [
      "path",
      {
        "d": "M 20.25 6.31 L 24.48 2.08 L 24.48 13.46 L 20.25 17.69"
      }
    ]
  ]
};

export const VicinoCement = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 6.31 L 20.25 6.31 L 20.25 17.69 L 3.75 17.69 Z" />
      <path d="M 3.75 6.31 L 7.98 2.08 L 24.48 2.08 L 20.25 6.31" />
      <path d="M 20.25 6.31 L 24.48 2.08 L 24.48 13.46 L 20.25 17.69" />
      {children}
    </svg>
  );
});

export default VicinoCement;
