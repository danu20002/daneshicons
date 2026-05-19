import React from 'react';

export const iconData = {
  "id": "TrattoDitch",
  "name": "TrattoDitch",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 12.00 a 7.54 7.54 0 1 0 15.08 0 a 7.54 7.54 0 1 0 -15.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 12.00 a 5.14 5.14 0 1 1 10.29 0 a 5.14 5.14 0 1 1 -10.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 12.00 L 21.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 15.52 L 19.83 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 15.52 18.09 L 16.52 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.04 L 12.00 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 8.48 18.09 L 7.48 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 15.52 L 4.17 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 12.00 L 2.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 8.48 L 4.17 7.48"
      }
    ],
    [
      "path",
      {
        "d": "M 8.48 5.91 L 7.48 4.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.96 L 12.00 2.96"
      }
    ],
    [
      "path",
      {
        "d": "M 15.52 5.91 L 16.52 4.17"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 8.48 L 19.83 7.48"
      }
    ]
  ]
};

export const TrattoDitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 12.00 a 7.54 7.54 0 1 0 15.08 0 a 7.54 7.54 0 1 0 -15.08 0" />
      <path d="M 6.86 12.00 a 5.14 5.14 0 1 1 10.29 0 a 5.14 5.14 0 1 1 -10.29 0" />
      <path d="M 19.04 12.00 L 21.04 12.00" />
      <path d="M 18.09 15.52 L 19.83 16.52" />
      <path d="M 15.52 18.09 L 16.52 19.83" />
      <path d="M 12.00 19.04 L 12.00 21.04" />
      <path d="M 8.48 18.09 L 7.48 19.83" />
      <path d="M 5.91 15.52 L 4.17 16.52" />
      <path d="M 4.96 12.00 L 2.96 12.00" />
      <path d="M 5.91 8.48 L 4.17 7.48" />
      <path d="M 8.48 5.91 L 7.48 4.17" />
      <path d="M 12.00 4.96 L 12.00 2.96" />
      <path d="M 15.52 5.91 L 16.52 4.17" />
      <path d="M 18.09 8.48 L 19.83 7.48" />
      {children}
    </svg>
  );
});

export default TrattoDitch;
