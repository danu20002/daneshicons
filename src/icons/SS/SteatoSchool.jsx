import React from 'react';

export const iconData = {
  "id": "SteatoSchool",
  "name": "SteatoSchool",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 12.00 a 7.41 7.41 0 1 0 14.83 0 a 7.41 7.41 0 1 0 -14.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 12.00 a 5.59 5.59 0 1 1 11.17 0 a 5.59 5.59 0 1 1 -11.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.91 12.00 L 20.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 15.74 L 19.50 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 14.87 18.29 L 15.70 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 18.84 L 10.73 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 17.22 L 6.16 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 13.95 L 3.45 14.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 10.05 L 3.45 9.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 6.78 L 6.16 5.26"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 5.16 L 10.73 3.18"
      }
    ],
    [
      "path",
      {
        "d": "M 14.87 5.71 L 15.70 3.89"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 8.26 L 19.50 7.18"
      }
    ]
  ]
};

export const SteatoSchool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 12.00 a 7.41 7.41 0 1 0 14.83 0 a 7.41 7.41 0 1 0 -14.83 0" />
      <path d="M 6.41 12.00 a 5.59 5.59 0 1 1 11.17 0 a 5.59 5.59 0 1 1 -11.17 0" />
      <path d="M 18.91 12.00 L 20.91 12.00" />
      <path d="M 17.82 15.74 L 19.50 16.82" />
      <path d="M 14.87 18.29 L 15.70 20.11" />
      <path d="M 11.02 18.84 L 10.73 20.82" />
      <path d="M 7.47 17.22 L 6.16 18.74" />
      <path d="M 5.37 13.95 L 3.45 14.51" />
      <path d="M 5.37 10.05 L 3.45 9.49" />
      <path d="M 7.47 6.78 L 6.16 5.26" />
      <path d="M 11.02 5.16 L 10.73 3.18" />
      <path d="M 14.87 5.71 L 15.70 3.89" />
      <path d="M 17.82 8.26 L 19.50 7.18" />
      {children}
    </svg>
  );
});

export default SteatoSchool;
