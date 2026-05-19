import React from 'react';

export const iconData = {
  "id": "OrniPort",
  "name": "OrniPort",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 6.25 L 20.78 6.25 L 20.78 17.75 L 3.22 17.75 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 6.25 L 6.41 3.06 L 23.97 3.06 L 20.78 6.25"
      }
    ],
    [
      "path",
      {
        "d": "M 20.78 6.25 L 23.97 3.06 L 23.97 14.56 L 20.78 17.75"
      }
    ]
  ]
};

export const OrniPort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 6.25 L 20.78 6.25 L 20.78 17.75 L 3.22 17.75 Z" />
      <path d="M 3.22 6.25 L 6.41 3.06 L 23.97 3.06 L 20.78 6.25" />
      <path d="M 20.78 6.25 L 23.97 3.06 L 23.97 14.56 L 20.78 17.75" />
      {children}
    </svg>
  );
});

export default OrniPort;
