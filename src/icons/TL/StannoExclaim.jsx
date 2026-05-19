import React from 'react';

export const iconData = {
  "id": "StannoExclaim",
  "name": "StannoExclaim",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 12.00 a 8.99 8.99 0 1 0 17.99 0 a 8.99 8.99 0 1 0 -17.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 12.00 a 6.73 6.73 0 1 1 13.47 0 a 6.73 6.73 0 1 1 -13.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.49 12.00 L 22.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 17.46 L 20.04 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 20.36 L 13.82 22.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.75 19.36 L 6.75 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 14.91 L 2.14 15.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 9.09 L 2.14 8.41"
      }
    ],
    [
      "path",
      {
        "d": "M 7.75 4.64 L 6.75 2.91"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 3.64 L 13.82 1.67"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 6.54 L 20.04 5.25"
      }
    ]
  ]
};

export const StannoExclaim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 12.00 a 8.99 8.99 0 1 0 17.99 0 a 8.99 8.99 0 1 0 -17.99 0" />
      <path d="M 5.27 12.00 a 6.73 6.73 0 1 1 13.47 0 a 6.73 6.73 0 1 1 -13.47 0" />
      <path d="M 20.49 12.00 L 22.49 12.00" />
      <path d="M 18.51 17.46 L 20.04 18.75" />
      <path d="M 13.47 20.36 L 13.82 22.33" />
      <path d="M 7.75 19.36 L 6.75 21.09" />
      <path d="M 4.02 14.91 L 2.14 15.59" />
      <path d="M 4.02 9.09 L 2.14 8.41" />
      <path d="M 7.75 4.64 L 6.75 2.91" />
      <path d="M 13.47 3.64 L 13.82 1.67" />
      <path d="M 18.51 6.54 L 20.04 5.25" />
      {children}
    </svg>
  );
});

export default StannoExclaim;
