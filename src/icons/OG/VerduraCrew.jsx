import React from 'react';

export const iconData = {
  "id": "VerduraCrew",
  "name": "VerduraCrew",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.18 12.00 a 9.82 9.82 0 1 0 19.64 0 a 9.82 9.82 0 1 0 -19.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.18 12.00 a 9.82 2.945948312245309 0 1 0 19.64 0 a 9.82 2.945948312245309 0 1 0 -19.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 5.06 A 2 2 0 0 0 18.94 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 5.06 A 2 2 0 0 1 18.94 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.18 A 2 2 0 0 0 12.00 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.18 A 2 2 0 0 1 12.00 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 5.06 A 2 2 0 0 0 5.06 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 5.06 A 2 2 0 0 1 5.06 18.94"
      }
    ]
  ]
};

export const VerduraCrew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.18 12.00 a 9.82 9.82 0 1 0 19.64 0 a 9.82 9.82 0 1 0 -19.64 0" />
      <path d="M 2.18 12.00 a 9.82 2.945948312245309 0 1 0 19.64 0 a 9.82 2.945948312245309 0 1 0 -19.64 0" />
      <path d="M 18.94 5.06 A 2 2 0 0 0 18.94 18.94" />
      <path d="M 18.94 5.06 A 2 2 0 0 1 18.94 18.94" />
      <path d="M 12.00 2.18 A 2 2 0 0 0 12.00 21.82" />
      <path d="M 12.00 2.18 A 2 2 0 0 1 12.00 21.82" />
      <path d="M 5.06 5.06 A 2 2 0 0 0 5.06 18.94" />
      <path d="M 5.06 5.06 A 2 2 0 0 1 5.06 18.94" />
      {children}
    </svg>
  );
});

export default VerduraCrew;
