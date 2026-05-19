import React from 'react';

export const iconData = {
  "id": "VersaleSkip",
  "name": "VersaleSkip",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.15 10.28 A 3.88 5.32 42 0 0 10.75 12.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 10.84 A 5.40 6.14 80 0 0 18.50 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 15.46 L 3.77 6.70 L 16.76 19.86 L 11.55 4.44 L 12.42 20.46 L 2.55 15.55 L 10.19 3.88"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 12.97 A 3.59 4.94 78 0 0 12.79 15.79"
      }
    ],
    [
      "path",
      {
        "d": "M 8.09 7.42 A 6.84 5.04 60 0 0 15.31 6.20"
      }
    ]
  ]
};

export const VersaleSkip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.15 10.28 A 3.88 5.32 42 0 0 10.75 12.61" />
      <path d="M 7.44 10.84 A 5.40 6.14 80 0 0 18.50 14.67" />
      <path d="M 3.20 15.46 L 3.77 6.70 L 16.76 19.86 L 11.55 4.44 L 12.42 20.46 L 2.55 15.55 L 10.19 3.88" />
      <path d="M 3.41 12.97 A 3.59 4.94 78 0 0 12.79 15.79" />
      <path d="M 8.09 7.42 A 6.84 5.04 60 0 0 15.31 6.20" />
      {children}
    </svg>
  );
});

export default VersaleSkip;
