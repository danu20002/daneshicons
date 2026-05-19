import React from 'react';

export const iconData = {
  "id": "RemoShaft",
  "name": "RemoShaft",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 2.10 C 18.47 10.70, 14.44 16.95, 14.06 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 9.63 C 13.39 18.55, 19.38 14.43, 18.59 21.22"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 4.40 C 11.70 17.29, 14.17 4.13, 21.41 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 9.74 4.90 C 19.24 6.37, 8.71 13.27, 15.70 14.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 5.61 C 16.78 11.55, 4.97 19.52, 15.13 21.37"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 4.45 C 14.15 18.92, 13.48 5.98, 18.00 19.76"
      }
    ]
  ]
};

export const RemoShaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 2.10 C 18.47 10.70, 14.44 16.95, 14.06 16.41" />
      <path d="M 7.10 9.63 C 13.39 18.55, 19.38 14.43, 18.59 21.22" />
      <path d="M 2.97 4.40 C 11.70 17.29, 14.17 4.13, 21.41 18.98" />
      <path d="M 9.74 4.90 C 19.24 6.37, 8.71 13.27, 15.70 14.45" />
      <path d="M 4.88 5.61 C 16.78 11.55, 4.97 19.52, 15.13 21.37" />
      <path d="M 4.44 4.45 C 14.15 18.92, 13.48 5.98, 18.00 19.76" />
      {children}
    </svg>
  );
});

export default RemoShaft;
