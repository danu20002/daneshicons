import React from 'react';

export const iconData = {
  "id": "VillicoLeaf",
  "name": "VillicoLeaf",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 12.00 a 8.10 8.10 0 1 0 16.19 0 a 8.10 8.10 0 1 0 -16.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.60 12.00 L 21.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.37 17.37 L 18.79 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.60 L 12.00 21.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 17.37 L 5.21 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 4.40 12.00 L 2.40 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 6.63 L 5.21 5.21"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.40 L 12.00 2.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.37 6.63 L 18.79 5.21"
      }
    ]
  ]
};

export const VillicoLeaf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 12.00 a 8.10 8.10 0 1 0 16.19 0 a 8.10 8.10 0 1 0 -16.19 0" />
      <path d="M 5.86 12.00 a 6.14 6.14 0 1 1 12.28 0 a 6.14 6.14 0 1 1 -12.28 0" />
      <path d="M 19.60 12.00 L 21.60 12.00" />
      <path d="M 17.37 17.37 L 18.79 18.79" />
      <path d="M 12.00 19.60 L 12.00 21.60" />
      <path d="M 6.63 17.37 L 5.21 18.79" />
      <path d="M 4.40 12.00 L 2.40 12.00" />
      <path d="M 6.63 6.63 L 5.21 5.21" />
      <path d="M 12.00 4.40 L 12.00 2.40" />
      <path d="M 17.37 6.63 L 18.79 5.21" />
      {children}
    </svg>
  );
});

export default VillicoLeaf;
