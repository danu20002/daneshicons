import React from 'react';

export const iconData = {
  "id": "RegulaEagle",
  "name": "RegulaEagle",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.32 13.58 L 10.42 21.32 L 2.68 10.42 L 13.58 2.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.76 13.83 L 10.17 17.76 L 6.24 10.17 L 13.83 6.24 Z"
      }
    ]
  ]
};

export const RegulaEagle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.32 13.58 L 10.42 21.32 L 2.68 10.42 L 13.58 2.68 Z" />
      <path d="M 17.76 13.83 L 10.17 17.76 L 6.24 10.17 L 13.83 6.24 Z" />
      {children}
    </svg>
  );
});

export default RegulaEagle;
