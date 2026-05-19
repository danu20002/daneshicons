import React from 'react';

export const iconData = {
  "id": "IndigoMine",
  "name": "IndigoMine",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 5.59 L 20.63 5.59 L 20.63 18.41 L 3.37 18.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 5.59 L 7.52 1.44 L 24.78 1.44 L 20.63 5.59"
      }
    ],
    [
      "path",
      {
        "d": "M 20.63 5.59 L 24.78 1.44 L 24.78 14.26 L 20.63 18.41"
      }
    ]
  ]
};

export const IndigoMine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 5.59 L 20.63 5.59 L 20.63 18.41 L 3.37 18.41 Z" />
      <path d="M 3.37 5.59 L 7.52 1.44 L 24.78 1.44 L 20.63 5.59" />
      <path d="M 20.63 5.59 L 24.78 1.44 L 24.78 14.26 L 20.63 18.41" />
      {children}
    </svg>
  );
});

export default IndigoMine;
