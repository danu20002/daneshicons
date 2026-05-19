import React from 'react';

export const iconData = {
  "id": "OpticDesire",
  "name": "OpticDesire",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 5.74 L 20.23 5.74 L 20.23 18.26 L 3.77 18.26 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 5.74 L 8.48 1.03 L 24.94 1.03 L 20.23 5.74"
      }
    ],
    [
      "path",
      {
        "d": "M 20.23 5.74 L 24.94 1.03 L 24.94 13.55 L 20.23 18.26"
      }
    ]
  ]
};

export const OpticDesire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 5.74 L 20.23 5.74 L 20.23 18.26 L 3.77 18.26 Z" />
      <path d="M 3.77 5.74 L 8.48 1.03 L 24.94 1.03 L 20.23 5.74" />
      <path d="M 20.23 5.74 L 24.94 1.03 L 24.94 13.55 L 20.23 18.26" />
      {children}
    </svg>
  );
});

export default OpticDesire;
