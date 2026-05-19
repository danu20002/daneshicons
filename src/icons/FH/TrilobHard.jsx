import React from 'react';

export const iconData = {
  "id": "TrilobHard",
  "name": "TrilobHard",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 9.66 L 13.70 9.66"
      }
    ],
    [
      "path",
      {
        "d": "M 13.52 9.09 L 14.75 12.89"
      }
    ],
    [
      "path",
      {
        "d": "M 15.24 12.54 L 12.00 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.48 15.25 L 9.25 12.89"
      }
    ],
    [
      "path",
      {
        "d": "M 9.06 13.46 L 10.30 9.66"
      }
    ]
  ]
};

export const TrilobHard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 9.66 L 13.70 9.66" />
      <path d="M 13.52 9.09 L 14.75 12.89" />
      <path d="M 15.24 12.54 L 12.00 14.90" />
      <path d="M 12.48 15.25 L 9.25 12.89" />
      <path d="M 9.06 13.46 L 10.30 9.66" />
      {children}
    </svg>
  );
});

export default TrilobHard;
