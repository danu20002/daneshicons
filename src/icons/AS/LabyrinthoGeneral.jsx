import React from 'react';

export const iconData = {
  "id": "LabyrinthoGeneral",
  "name": "LabyrinthoGeneral",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 12.00 a 4.00 4.00 0 1 0 8.00 0 a 4.00 4.00 0 1 0 -8.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 12.00 a 5.23 5.23 0 1 0 10.47 0 a 5.23 5.23 0 1 0 -10.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 12.00 a 7.18 7.18 0 1 0 14.36 0 a 7.18 7.18 0 1 0 -14.36 0"
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

export const LabyrinthoGeneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0" />
      <path d="M 8.00 12.00 a 4.00 4.00 0 1 0 8.00 0 a 4.00 4.00 0 1 0 -8.00 0" />
      <path d="M 6.77 12.00 a 5.23 5.23 0 1 0 10.47 0 a 5.23 5.23 0 1 0 -10.47 0" />
      <path d="M 4.82 12.00 a 7.18 7.18 0 1 0 14.36 0 a 7.18 7.18 0 1 0 -14.36 0" />
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.36 0 a 8.68 8.68 0 1 0 -17.36 0" />
      {children}
    </svg>
  );
});

export default LabyrinthoGeneral;
