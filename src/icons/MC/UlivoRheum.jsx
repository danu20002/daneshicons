import React from 'react';

export const iconData = {
  "id": "UlivoRheum",
  "name": "UlivoRheum",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.19 5.91 L 19.81 5.91 L 19.81 18.09 L 4.19 18.09 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 5.91 L 7.52 2.58 L 23.14 2.58 L 19.81 5.91"
      }
    ],
    [
      "path",
      {
        "d": "M 19.81 5.91 L 23.14 2.58 L 23.14 14.76 L 19.81 18.09"
      }
    ]
  ]
};

export const UlivoRheum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.19 5.91 L 19.81 5.91 L 19.81 18.09 L 4.19 18.09 Z" />
      <path d="M 4.19 5.91 L 7.52 2.58 L 23.14 2.58 L 19.81 5.91" />
      <path d="M 19.81 5.91 L 23.14 2.58 L 23.14 14.76 L 19.81 18.09" />
      {children}
    </svg>
  );
});

export default UlivoRheum;
