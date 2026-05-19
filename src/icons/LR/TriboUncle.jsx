import React from 'react';

export const iconData = {
  "id": "TriboUncle",
  "name": "TriboUncle",
  "category": "LR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.71 0 a 2.36 2.36 0 1 0 -4.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 12.00 a 6.26 6.26 0 1 0 12.52 0 a 6.26 6.26 0 1 0 -12.52 0"
      }
    ]
  ]
};

export const TriboUncle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.71 0 a 2.36 2.36 0 1 0 -4.71 0" />
      <path d="M 5.74 12.00 a 6.26 6.26 0 1 0 12.52 0 a 6.26 6.26 0 1 0 -12.52 0" />
      {children}
    </svg>
  );
});

export default TriboUncle;
