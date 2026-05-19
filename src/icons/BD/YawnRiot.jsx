import React from 'react';

export const iconData = {
  "id": "YawnRiot",
  "name": "YawnRiot",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 5.21 L 19.82 5.21 L 19.82 18.79 L 4.18 18.79 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 5.21 L 7.58 1.81 L 23.22 1.81 L 19.82 5.21"
      }
    ],
    [
      "path",
      {
        "d": "M 19.82 5.21 L 23.22 1.81 L 23.22 15.39 L 19.82 18.79"
      }
    ]
  ]
};

export const YawnRiot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 5.21 L 19.82 5.21 L 19.82 18.79 L 4.18 18.79 Z" />
      <path d="M 4.18 5.21 L 7.58 1.81 L 23.22 1.81 L 19.82 5.21" />
      <path d="M 19.82 5.21 L 23.22 1.81 L 23.22 15.39 L 19.82 18.79" />
      {children}
    </svg>
  );
});

export default YawnRiot;
