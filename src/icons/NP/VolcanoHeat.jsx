import React from 'react';

export const iconData = {
  "id": "VolcanoHeat",
  "name": "VolcanoHeat",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.02 12.00 a 7.98 7.98 0 1 0 15.96 0 a 7.98 7.98 0 1 0 -15.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 12.00 a 5.44 5.44 0 1 1 10.87 0 a 5.44 5.44 0 1 1 -10.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 12.00 L 21.48 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 16.40 L 19.67 17.57"
      }
    ],
    [
      "path",
      {
        "d": "M 14.31 19.11 L 14.93 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 9.69 19.11 L 9.07 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 16.40 L 4.33 17.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 12.00 L 2.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 7.60 L 4.33 6.43"
      }
    ],
    [
      "path",
      {
        "d": "M 9.69 4.89 L 9.07 2.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.31 4.89 L 14.93 2.98"
      }
    ],
    [
      "path",
      {
        "d": "M 18.05 7.60 L 19.67 6.43"
      }
    ]
  ]
};

export const VolcanoHeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.02 12.00 a 7.98 7.98 0 1 0 15.96 0 a 7.98 7.98 0 1 0 -15.96 0" />
      <path d="M 6.56 12.00 a 5.44 5.44 0 1 1 10.87 0 a 5.44 5.44 0 1 1 -10.87 0" />
      <path d="M 19.48 12.00 L 21.48 12.00" />
      <path d="M 18.05 16.40 L 19.67 17.57" />
      <path d="M 14.31 19.11 L 14.93 21.02" />
      <path d="M 9.69 19.11 L 9.07 21.02" />
      <path d="M 5.95 16.40 L 4.33 17.57" />
      <path d="M 4.52 12.00 L 2.52 12.00" />
      <path d="M 5.95 7.60 L 4.33 6.43" />
      <path d="M 9.69 4.89 L 9.07 2.98" />
      <path d="M 14.31 4.89 L 14.93 2.98" />
      <path d="M 18.05 7.60 L 19.67 6.43" />
      {children}
    </svg>
  );
});

export default VolcanoHeat;
