import React from 'react';

export const iconData = {
  "id": "VaranoMemento",
  "name": "VaranoMemento",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 6.22 L 20.92 6.22 L 20.92 17.78 L 3.08 17.78 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.08 6.22 L 7.34 1.97 L 25.17 1.97 L 20.92 6.22"
      }
    ],
    [
      "path",
      {
        "d": "M 20.92 6.22 L 25.17 1.97 L 25.17 13.52 L 20.92 17.78"
      }
    ]
  ]
};

export const VaranoMemento = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 6.22 L 20.92 6.22 L 20.92 17.78 L 3.08 17.78 Z" />
      <path d="M 3.08 6.22 L 7.34 1.97 L 25.17 1.97 L 20.92 6.22" />
      <path d="M 20.92 6.22 L 25.17 1.97 L 25.17 13.52 L 20.92 17.78" />
      {children}
    </svg>
  );
});

export default VaranoMemento;
