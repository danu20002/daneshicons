import React from 'react';

export const iconData = {
  "id": "UniIvory",
  "name": "UniIvory",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.61 6.97 L 19.39 6.97 L 19.39 17.03 L 4.61 17.03 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 6.97 L 8.41 3.17 L 23.19 3.17 L 19.39 6.97"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 6.97 L 23.19 3.17 L 23.19 13.23 L 19.39 17.03"
      }
    ]
  ]
};

export const UniIvory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.61 6.97 L 19.39 6.97 L 19.39 17.03 L 4.61 17.03 Z" />
      <path d="M 4.61 6.97 L 8.41 3.17 L 23.19 3.17 L 19.39 6.97" />
      <path d="M 19.39 6.97 L 23.19 3.17 L 23.19 13.23 L 19.39 17.03" />
      {children}
    </svg>
  );
});

export default UniIvory;
