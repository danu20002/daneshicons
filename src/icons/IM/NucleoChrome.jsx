import React from 'react';

export const iconData = {
  "id": "NucleoChrome",
  "name": "NucleoChrome",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.29 12.00 a 8.71 8.71 0 1 0 17.42 0 a 8.71 8.71 0 1 0 -17.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 12.00 a 6.34 6.34 0 1 1 12.68 0 a 6.34 6.34 0 1 1 -12.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 12.00 L 22.21 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.10 19.11 L 17.10 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 19.11 L 6.90 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 12.00 L 1.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.90 4.89 L 6.90 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 16.10 4.89 L 17.10 3.16"
      }
    ]
  ]
};

export const NucleoChrome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.29 12.00 a 8.71 8.71 0 1 0 17.42 0 a 8.71 8.71 0 1 0 -17.42 0" />
      <path d="M 5.66 12.00 a 6.34 6.34 0 1 1 12.68 0 a 6.34 6.34 0 1 1 -12.68 0" />
      <path d="M 20.21 12.00 L 22.21 12.00" />
      <path d="M 16.10 19.11 L 17.10 20.84" />
      <path d="M 7.90 19.11 L 6.90 20.84" />
      <path d="M 3.79 12.00 L 1.79 12.00" />
      <path d="M 7.90 4.89 L 6.90 3.16" />
      <path d="M 16.10 4.89 L 17.10 3.16" />
      {children}
    </svg>
  );
});

export default NucleoChrome;
