import React from 'react';

export const iconData = {
  "id": "InteroContact",
  "name": "InteroContact",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 5.24 L 19.86 5.24 L 19.86 18.76 L 4.14 18.76 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 5.24 L 8.51 0.87 L 24.23 0.87 L 19.86 5.24"
      }
    ],
    [
      "path",
      {
        "d": "M 19.86 5.24 L 24.23 0.87 L 24.23 14.39 L 19.86 18.76"
      }
    ]
  ]
};

export const InteroContact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 5.24 L 19.86 5.24 L 19.86 18.76 L 4.14 18.76 Z" />
      <path d="M 4.14 5.24 L 8.51 0.87 L 24.23 0.87 L 19.86 5.24" />
      <path d="M 19.86 5.24 L 24.23 0.87 L 24.23 14.39 L 19.86 18.76" />
      {children}
    </svg>
  );
});

export default InteroContact;
