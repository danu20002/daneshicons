import React from 'react';

export const iconData = {
  "id": "AutoNerve",
  "name": "AutoNerve",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 12.00 a 8.92 8.92 0 1 0 17.84 0 a 8.92 8.92 0 1 0 -17.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 a 7.07 7.07 0 1 1 14.15 0 a 7.07 7.07 0 1 1 -14.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.42 12.00 L 22.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 17.41 L 19.98 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 20.29 L 13.81 22.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 19.29 L 6.79 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 4.09 14.88 L 2.21 15.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.09 9.12 L 2.21 8.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 4.71 L 6.79 2.98"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 3.71 L 13.81 1.74"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 6.59 L 19.98 5.30"
      }
    ]
  ]
};

export const AutoNerve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 12.00 a 8.92 8.92 0 1 0 17.84 0 a 8.92 8.92 0 1 0 -17.84 0" />
      <path d="M 4.93 12.00 a 7.07 7.07 0 1 1 14.15 0 a 7.07 7.07 0 1 1 -14.15 0" />
      <path d="M 20.42 12.00 L 22.42 12.00" />
      <path d="M 18.45 17.41 L 19.98 18.70" />
      <path d="M 13.46 20.29 L 13.81 22.26" />
      <path d="M 7.79 19.29 L 6.79 21.02" />
      <path d="M 4.09 14.88 L 2.21 15.56" />
      <path d="M 4.09 9.12 L 2.21 8.44" />
      <path d="M 7.79 4.71 L 6.79 2.98" />
      <path d="M 13.46 3.71 L 13.81 1.74" />
      <path d="M 18.45 6.59 L 19.98 5.30" />
      {children}
    </svg>
  );
});

export default AutoNerve;
