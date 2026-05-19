import React from 'react';

export const iconData = {
  "id": "TumuloShutdown",
  "name": "TumuloShutdown",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.23 0 a 7.11 7.11 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 12.00 a 4.91 4.91 0 1 1 9.81 0 a 4.91 4.91 0 1 1 -9.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.61 12.00 L 20.61 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.56 15.58 L 19.25 16.66"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 18.02 L 15.58 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 18.55 L 10.77 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 17.00 L 6.36 18.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 13.86 L 3.74 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 10.14 L 3.74 9.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 7.00 L 6.36 5.49"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 5.45 L 10.77 3.48"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 5.98 L 15.58 4.17"
      }
    ],
    [
      "path",
      {
        "d": "M 17.56 8.42 L 19.25 7.34"
      }
    ]
  ]
};

export const TumuloShutdown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.23 0 a 7.11 7.11 0 1 0 -14.23 0" />
      <path d="M 7.09 12.00 a 4.91 4.91 0 1 1 9.81 0 a 4.91 4.91 0 1 1 -9.81 0" />
      <path d="M 18.61 12.00 L 20.61 12.00" />
      <path d="M 17.56 15.58 L 19.25 16.66" />
      <path d="M 14.75 18.02 L 15.58 19.83" />
      <path d="M 11.06 18.55 L 10.77 20.52" />
      <path d="M 7.67 17.00 L 6.36 18.51" />
      <path d="M 5.66 13.86 L 3.74 14.43" />
      <path d="M 5.66 10.14 L 3.74 9.57" />
      <path d="M 7.67 7.00 L 6.36 5.49" />
      <path d="M 11.06 5.45 L 10.77 3.48" />
      <path d="M 14.75 5.98 L 15.58 4.17" />
      <path d="M 17.56 8.42 L 19.25 7.34" />
      {children}
    </svg>
  );
});

export default TumuloShutdown;
