import React from 'react';

export const iconData = {
  "id": "TiliChasm",
  "name": "TiliChasm",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 6.37 L 20.73 6.37 L 20.73 17.63 L 3.27 17.63 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 6.37 L 6.32 3.32 L 23.78 3.32 L 20.73 6.37"
      }
    ],
    [
      "path",
      {
        "d": "M 20.73 6.37 L 23.78 3.32 L 23.78 14.58 L 20.73 17.63"
      }
    ]
  ]
};

export const TiliChasm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 6.37 L 20.73 6.37 L 20.73 17.63 L 3.27 17.63 Z" />
      <path d="M 3.27 6.37 L 6.32 3.32 L 23.78 3.32 L 20.73 6.37" />
      <path d="M 20.73 6.37 L 23.78 3.32 L 23.78 14.58 L 20.73 17.63" />
      {children}
    </svg>
  );
});

export default TiliChasm;
