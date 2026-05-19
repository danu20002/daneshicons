import React from 'react';

export const iconData = {
  "id": "VignaCover",
  "name": "VignaCover",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 8.33 12.00 a 3.67 3.67 0 1 0 7.33 0 a 3.67 3.67 0 1 0 -7.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 12.00 a 5.52 5.52 0 1 0 11.04 0 a 5.52 5.52 0 1 0 -11.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.15 0 a 7.08 7.08 0 1 0 -14.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0"
      }
    ]
  ]
};

export const VignaCover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0" stroke-dasharray="6 3" />
      <path d="M 8.33 12.00 a 3.67 3.67 0 1 0 7.33 0 a 3.67 3.67 0 1 0 -7.33 0" />
      <path d="M 6.48 12.00 a 5.52 5.52 0 1 0 11.04 0 a 5.52 5.52 0 1 0 -11.04 0" />
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.15 0 a 7.08 7.08 0 1 0 -14.15 0" />
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0" />
      {children}
    </svg>
  );
});

export default VignaCover;
