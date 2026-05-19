import React from 'react';

export const iconData = {
  "id": "TelluroTolerance",
  "name": "TelluroTolerance",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 12.00 a 7.68 7.68 0 1 0 15.37 0 a 7.68 7.68 0 1 0 -15.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 12.00 a 5.08 5.08 0 1 1 10.16 0 a 5.08 5.08 0 1 1 -10.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 12.00 L 21.18 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.50 16.62 L 19.03 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 19.07 L 13.59 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 18.22 L 7.41 19.95"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 14.46 L 3.37 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 9.54 L 3.37 8.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 5.78 L 7.41 4.05"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 4.93 L 13.59 2.96"
      }
    ],
    [
      "path",
      {
        "d": "M 17.50 7.38 L 19.03 6.10"
      }
    ]
  ]
};

export const TelluroTolerance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 12.00 a 7.68 7.68 0 1 0 15.37 0 a 7.68 7.68 0 1 0 -15.37 0" />
      <path d="M 6.92 12.00 a 5.08 5.08 0 1 1 10.16 0 a 5.08 5.08 0 1 1 -10.16 0" />
      <path d="M 19.18 12.00 L 21.18 12.00" />
      <path d="M 17.50 16.62 L 19.03 17.90" />
      <path d="M 13.25 19.07 L 13.59 21.04" />
      <path d="M 8.41 18.22 L 7.41 19.95" />
      <path d="M 5.25 14.46 L 3.37 15.14" />
      <path d="M 5.25 9.54 L 3.37 8.86" />
      <path d="M 8.41 5.78 L 7.41 4.05" />
      <path d="M 13.25 4.93 L 13.59 2.96" />
      <path d="M 17.50 7.38 L 19.03 6.10" />
      {children}
    </svg>
  );
});

export default TelluroTolerance;
