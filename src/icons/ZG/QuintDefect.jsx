import React from 'react';

export const iconData = {
  "id": "QuintDefect",
  "name": "QuintDefect",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 5.46 L 19.75 5.46 L 19.75 18.54 L 4.25 18.54 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 5.46 L 7.77 1.94 L 23.28 1.94 L 19.75 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 19.75 5.46 L 23.28 1.94 L 23.28 15.02 L 19.75 18.54"
      }
    ]
  ]
};

export const QuintDefect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 5.46 L 19.75 5.46 L 19.75 18.54 L 4.25 18.54 Z" />
      <path d="M 4.25 5.46 L 7.77 1.94 L 23.28 1.94 L 19.75 5.46" />
      <path d="M 19.75 5.46 L 23.28 1.94 L 23.28 15.02 L 19.75 18.54" />
      {children}
    </svg>
  );
});

export default QuintDefect;
