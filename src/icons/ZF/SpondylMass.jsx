import React from 'react';

export const iconData = {
  "id": "SpondylMass",
  "name": "SpondylMass",
  "category": "ZF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.91 12.00 a 9.09 9.09 0 1 0 18.17 0 a 9.09 9.09 0 1 0 -18.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 7.46 a 7.87 2.3604810206932196 0 1 0 15.74 0 a 7.87 2.3604810206932196 0 1 0 -15.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.91 12.00 a 9.09 2.725648705428466 0 1 0 18.17 0 a 9.09 2.725648705428466 0 1 0 -18.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 16.54 a 7.87 2.3604810206932196 0 1 0 15.74 0 a 7.87 2.3604810206932196 0 1 0 -15.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.91 A 2 2 0 0 0 12.00 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.91 A 2 2 0 0 1 12.00 21.09"
      }
    ]
  ]
};

export const SpondylMass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.91 12.00 a 9.09 9.09 0 1 0 18.17 0 a 9.09 9.09 0 1 0 -18.17 0" />
      <path d="M 4.13 7.46 a 7.87 2.3604810206932196 0 1 0 15.74 0 a 7.87 2.3604810206932196 0 1 0 -15.74 0" />
      <path d="M 2.91 12.00 a 9.09 2.725648705428466 0 1 0 18.17 0 a 9.09 2.725648705428466 0 1 0 -18.17 0" />
      <path d="M 4.13 16.54 a 7.87 2.3604810206932196 0 1 0 15.74 0 a 7.87 2.3604810206932196 0 1 0 -15.74 0" />
      <path d="M 12.00 2.91 A 2 2 0 0 0 12.00 21.09" />
      <path d="M 12.00 2.91 A 2 2 0 0 1 12.00 21.09" />
      {children}
    </svg>
  );
});

export default SpondylMass;
