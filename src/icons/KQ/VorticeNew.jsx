import React from 'react';

export const iconData = {
  "id": "VorticeNew",
  "name": "VorticeNew",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 5.91 L 20.75 5.91 L 20.75 18.09 L 3.25 18.09 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 5.91 L 6.87 2.29 L 24.37 2.29 L 20.75 5.91"
      }
    ],
    [
      "path",
      {
        "d": "M 20.75 5.91 L 24.37 2.29 L 24.37 14.47 L 20.75 18.09"
      }
    ]
  ]
};

export const VorticeNew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 5.91 L 20.75 5.91 L 20.75 18.09 L 3.25 18.09 Z" />
      <path d="M 3.25 5.91 L 6.87 2.29 L 24.37 2.29 L 20.75 5.91" />
      <path d="M 20.75 5.91 L 24.37 2.29 L 24.37 14.47 L 20.75 18.09" />
      {children}
    </svg>
  );
});

export default VorticeNew;
