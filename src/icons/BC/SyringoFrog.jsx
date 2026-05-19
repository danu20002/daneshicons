import React from 'react';

export const iconData = {
  "id": "SyringoFrog",
  "name": "SyringoFrog",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 12.00 a 9.41 9.41 0 1 0 18.81 0 a 9.41 9.41 0 1 0 -18.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 12.00 a 9.41 2.8221213474869726 0 1 0 18.81 0 a 9.41 2.8221213474869726 0 1 0 -18.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.65 5.35 A 2 2 0 0 0 18.65 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 18.65 5.35 A 2 2 0 0 1 18.65 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.59 A 2 2 0 0 0 12.00 21.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.59 A 2 2 0 0 1 12.00 21.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 5.35 A 2 2 0 0 0 5.35 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 5.35 A 2 2 0 0 1 5.35 18.65"
      }
    ]
  ]
};

export const SyringoFrog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 12.00 a 9.41 9.41 0 1 0 18.81 0 a 9.41 9.41 0 1 0 -18.81 0" />
      <path d="M 2.59 12.00 a 9.41 2.8221213474869726 0 1 0 18.81 0 a 9.41 2.8221213474869726 0 1 0 -18.81 0" />
      <path d="M 18.65 5.35 A 2 2 0 0 0 18.65 18.65" />
      <path d="M 18.65 5.35 A 2 2 0 0 1 18.65 18.65" />
      <path d="M 12.00 2.59 A 2 2 0 0 0 12.00 21.41" />
      <path d="M 12.00 2.59 A 2 2 0 0 1 12.00 21.41" />
      <path d="M 5.35 5.35 A 2 2 0 0 0 5.35 18.65" />
      <path d="M 5.35 5.35 A 2 2 0 0 1 5.35 18.65" />
      {children}
    </svg>
  );
});

export default SyringoFrog;
