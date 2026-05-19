import React from 'react';

export const iconData = {
  "id": "ScintilHeaven",
  "name": "ScintilHeaven",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.88 6.88 C 11.40 4.72, 14.06 7.75, 21.69 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 6.56 C 13.08 8.98, 14.77 13.65, 14.78 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 6.64 2.52 C 16.93 11.34, 5.24 19.01, 16.34 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 6.86 C 6.11 18.39, 6.61 7.61, 14.21 20.49"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 6.68 C 4.47 14.59, 12.05 15.60, 14.77 16.88"
      }
    ]
  ]
};

export const ScintilHeaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.88 6.88 C 11.40 4.72, 14.06 7.75, 21.69 19.15" />
      <path d="M 2.49 6.56 C 13.08 8.98, 14.77 13.65, 14.78 19.39" />
      <path d="M 6.64 2.52 C 16.93 11.34, 5.24 19.01, 16.34 14.98" />
      <path d="M 6.98 6.86 C 6.11 18.39, 6.61 7.61, 14.21 20.49" />
      <path d="M 4.01 6.68 C 4.47 14.59, 12.05 15.60, 14.77 16.88" />
      {children}
    </svg>
  );
});

export default ScintilHeaven;
