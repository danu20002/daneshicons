import React from 'react';

export const iconData = {
  "id": "SelectoPray",
  "name": "SelectoPray",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 6.87 L 19.07 6.87 L 19.07 17.13 L 4.93 17.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 6.87 L 9.66 2.14 L 23.80 2.14 L 19.07 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 6.87 L 23.80 2.14 L 23.80 12.39 L 19.07 17.13"
      }
    ]
  ]
};

export const SelectoPray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 6.87 L 19.07 6.87 L 19.07 17.13 L 4.93 17.13 Z" />
      <path d="M 4.93 6.87 L 9.66 2.14 L 23.80 2.14 L 19.07 6.87" />
      <path d="M 19.07 6.87 L 23.80 2.14 L 23.80 12.39 L 19.07 17.13" />
      {children}
    </svg>
  );
});

export default SelectoPray;
