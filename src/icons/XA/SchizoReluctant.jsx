import React from 'react';

export const iconData = {
  "id": "SchizoReluctant",
  "name": "SchizoReluctant",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 12.00 a 8.59 8.59 0 1 0 17.17 0 a 8.59 8.59 0 1 0 -17.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 12.00 a 8.59 2.5760116658639163 0 1 0 17.17 0 a 8.59 2.5760116658639163 0 1 0 -17.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.41 A 2 2 0 0 0 12.00 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.41 A 2 2 0 0 1 12.00 20.59"
      }
    ]
  ]
};

export const SchizoReluctant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 12.00 a 8.59 8.59 0 1 0 17.17 0 a 8.59 8.59 0 1 0 -17.17 0" />
      <path d="M 3.41 12.00 a 8.59 2.5760116658639163 0 1 0 17.17 0 a 8.59 2.5760116658639163 0 1 0 -17.17 0" />
      <path d="M 12.00 3.41 A 2 2 0 0 0 12.00 20.59" />
      <path d="M 12.00 3.41 A 2 2 0 0 1 12.00 20.59" />
      {children}
    </svg>
  );
});

export default SchizoReluctant;
