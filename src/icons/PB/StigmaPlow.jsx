import React from 'react';

export const iconData = {
  "id": "StigmaPlow",
  "name": "StigmaPlow",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 12.00 a 7.89 7.89 0 1 0 15.78 0 a 7.89 7.89 0 1 0 -15.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.83 12.00 a 5.17 5.17 0 1 1 10.33 0 a 5.17 5.17 0 1 1 -10.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 12.00 L 21.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.70 18.40 L 16.70 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 18.40 L 7.30 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 12.00 L 2.61 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 5.60 L 7.30 3.87"
      }
    ],
    [
      "path",
      {
        "d": "M 15.70 5.60 L 16.70 3.87"
      }
    ]
  ]
};

export const StigmaPlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 12.00 a 7.89 7.89 0 1 0 15.78 0 a 7.89 7.89 0 1 0 -15.78 0" />
      <path d="M 6.83 12.00 a 5.17 5.17 0 1 1 10.33 0 a 5.17 5.17 0 1 1 -10.33 0" />
      <path d="M 19.39 12.00 L 21.39 12.00" />
      <path d="M 15.70 18.40 L 16.70 20.13" />
      <path d="M 8.30 18.40 L 7.30 20.13" />
      <path d="M 4.61 12.00 L 2.61 12.00" />
      <path d="M 8.30 5.60 L 7.30 3.87" />
      <path d="M 15.70 5.60 L 16.70 3.87" />
      {children}
    </svg>
  );
});

export default StigmaPlow;
