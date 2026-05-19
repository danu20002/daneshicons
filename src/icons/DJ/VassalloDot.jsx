import React from 'react';

export const iconData = {
  "id": "VassalloDot",
  "name": "VassalloDot",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 12.00 a 8.93 8.93 0 1 0 17.85 0 a 8.93 8.93 0 1 0 -17.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 12.00 a 6.83 6.83 0 1 1 13.66 0 a 6.83 6.83 0 1 1 -13.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 12.00 L 22.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.30 16.21 L 21.03 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.21 19.30 L 17.21 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.43 L 12.00 22.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 19.30 L 6.79 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 16.21 L 2.97 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 L 1.57 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 7.79 L 2.97 6.79"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 4.70 L 6.79 2.97"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.57 L 12.00 1.57"
      }
    ],
    [
      "path",
      {
        "d": "M 16.21 4.70 L 17.21 2.97"
      }
    ],
    [
      "path",
      {
        "d": "M 19.30 7.79 L 21.03 6.79"
      }
    ]
  ]
};

export const VassalloDot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 12.00 a 8.93 8.93 0 1 0 17.85 0 a 8.93 8.93 0 1 0 -17.85 0" />
      <path d="M 5.17 12.00 a 6.83 6.83 0 1 1 13.66 0 a 6.83 6.83 0 1 1 -13.66 0" />
      <path d="M 20.43 12.00 L 22.43 12.00" />
      <path d="M 19.30 16.21 L 21.03 17.21" />
      <path d="M 16.21 19.30 L 17.21 21.03" />
      <path d="M 12.00 20.43 L 12.00 22.43" />
      <path d="M 7.79 19.30 L 6.79 21.03" />
      <path d="M 4.70 16.21 L 2.97 17.21" />
      <path d="M 3.57 12.00 L 1.57 12.00" />
      <path d="M 4.70 7.79 L 2.97 6.79" />
      <path d="M 7.79 4.70 L 6.79 2.97" />
      <path d="M 12.00 3.57 L 12.00 1.57" />
      <path d="M 16.21 4.70 L 17.21 2.97" />
      <path d="M 19.30 7.79 L 21.03 6.79" />
      {children}
    </svg>
  );
});

export default VassalloDot;
