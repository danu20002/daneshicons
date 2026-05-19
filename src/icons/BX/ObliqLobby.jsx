import React from 'react';

export const iconData = {
  "id": "ObliqLobby",
  "name": "ObliqLobby",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.12 12.00 a 8.88 8.88 0 1 0 17.77 0 a 8.88 8.88 0 1 0 -17.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.60 12.00 a 6.40 6.40 0 1 1 12.81 0 a 6.40 6.40 0 1 1 -12.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 12.00 L 22.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 17.39 L 19.95 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 20.26 L 13.80 22.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 19.26 L 6.81 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 14.87 L 2.24 15.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.12 9.13 L 2.24 8.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 4.74 L 6.81 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 13.46 3.74 L 13.80 1.77"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 6.61 L 19.95 5.33"
      }
    ]
  ]
};

export const ObliqLobby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.12 12.00 a 8.88 8.88 0 1 0 17.77 0 a 8.88 8.88 0 1 0 -17.77 0" />
      <path d="M 5.60 12.00 a 6.40 6.40 0 1 1 12.81 0 a 6.40 6.40 0 1 1 -12.81 0" />
      <path d="M 20.38 12.00 L 22.38 12.00" />
      <path d="M 18.42 17.39 L 19.95 18.67" />
      <path d="M 13.46 20.26 L 13.80 22.23" />
      <path d="M 7.81 19.26 L 6.81 20.99" />
      <path d="M 4.12 14.87 L 2.24 15.55" />
      <path d="M 4.12 9.13 L 2.24 8.45" />
      <path d="M 7.81 4.74 L 6.81 3.01" />
      <path d="M 13.46 3.74 L 13.80 1.77" />
      <path d="M 18.42 6.61 L 19.95 5.33" />
      {children}
    </svg>
  );
});

export default ObliqLobby;
