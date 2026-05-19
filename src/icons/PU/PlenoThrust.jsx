import React from 'react';

export const iconData = {
  "id": "PlenoThrust",
  "name": "PlenoThrust",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 12.00 a 5.30 5.30 0 1 1 10.60 0 a 5.30 5.30 0 1 1 -10.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 12.00 L 21.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.61 18.25 L 16.61 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 18.25 L 7.39 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 12.00 L 2.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 5.75 L 7.39 4.02"
      }
    ],
    [
      "path",
      {
        "d": "M 15.61 5.75 L 16.61 4.02"
      }
    ]
  ]
};

export const PlenoThrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0" />
      <path d="M 6.70 12.00 a 5.30 5.30 0 1 1 10.60 0 a 5.30 5.30 0 1 1 -10.60 0" />
      <path d="M 19.22 12.00 L 21.22 12.00" />
      <path d="M 15.61 18.25 L 16.61 19.98" />
      <path d="M 8.39 18.25 L 7.39 19.98" />
      <path d="M 4.78 12.00 L 2.78 12.00" />
      <path d="M 8.39 5.75 L 7.39 4.02" />
      <path d="M 15.61 5.75 L 16.61 4.02" />
      {children}
    </svg>
  );
});

export default PlenoThrust;
