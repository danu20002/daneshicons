import React from 'react';

export const iconData = {
  "id": "PlumboSynapse",
  "name": "PlumboSynapse",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.19 6.79 L 19.81 6.79 L 19.81 17.21 L 4.19 17.21 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 6.79 L 8.33 2.65 L 23.95 2.65 L 19.81 6.79"
      }
    ],
    [
      "path",
      {
        "d": "M 19.81 6.79 L 23.95 2.65 L 23.95 13.08 L 19.81 17.21"
      }
    ]
  ]
};

export const PlumboSynapse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.19 6.79 L 19.81 6.79 L 19.81 17.21 L 4.19 17.21 Z" />
      <path d="M 4.19 6.79 L 8.33 2.65 L 23.95 2.65 L 19.81 6.79" />
      <path d="M 19.81 6.79 L 23.95 2.65 L 23.95 13.08 L 19.81 17.21" />
      {children}
    </svg>
  );
});

export default PlumboSynapse;
