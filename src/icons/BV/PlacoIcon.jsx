import React from 'react';

export const iconData = {
  "id": "PlacoIcon",
  "name": "PlacoIcon",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 12.00 a 9.37 9.37 0 1 0 18.74 0 a 9.37 9.37 0 1 0 -18.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.63 12.00 a 9.37 2.8111034631729126 0 1 0 18.74 0 a 9.37 2.8111034631729126 0 1 0 -18.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 5.37 A 2 2 0 0 0 18.63 18.63"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 5.37 A 2 2 0 0 1 18.63 18.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.63 A 2 2 0 0 0 12.00 21.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.63 A 2 2 0 0 1 12.00 21.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 5.37 A 2 2 0 0 0 5.37 18.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 5.37 A 2 2 0 0 1 5.37 18.63"
      }
    ]
  ]
};

export const PlacoIcon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 12.00 a 9.37 9.37 0 1 0 18.74 0 a 9.37 9.37 0 1 0 -18.74 0" />
      <path d="M 2.63 12.00 a 9.37 2.8111034631729126 0 1 0 18.74 0 a 9.37 2.8111034631729126 0 1 0 -18.74 0" />
      <path d="M 18.63 5.37 A 2 2 0 0 0 18.63 18.63" />
      <path d="M 18.63 5.37 A 2 2 0 0 1 18.63 18.63" />
      <path d="M 12.00 2.63 A 2 2 0 0 0 12.00 21.37" />
      <path d="M 12.00 2.63 A 2 2 0 0 1 12.00 21.37" />
      <path d="M 5.37 5.37 A 2 2 0 0 0 5.37 18.63" />
      <path d="M 5.37 5.37 A 2 2 0 0 1 5.37 18.63" />
      {children}
    </svg>
  );
});

export default PlacoIcon;
