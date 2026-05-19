import React from 'react';

export const iconData = {
  "id": "SinoRecruit",
  "name": "SinoRecruit",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.67 0 a 2.33 2.33 0 1 0 -4.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 12.00 a 3.99 3.99 0 1 0 7.98 0 a 3.99 3.99 0 1 0 -7.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 12.00 a 5.24 5.24 0 1 0 10.49 0 a 5.24 5.24 0 1 0 -10.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.85 0 a 8.42 8.42 0 1 0 -16.85 0"
      }
    ]
  ]
};

export const SinoRecruit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.67 0 a 2.33 2.33 0 1 0 -4.67 0" />
      <path d="M 8.01 12.00 a 3.99 3.99 0 1 0 7.98 0 a 3.99 3.99 0 1 0 -7.98 0" />
      <path d="M 6.76 12.00 a 5.24 5.24 0 1 0 10.49 0 a 5.24 5.24 0 1 0 -10.49 0" />
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0" stroke-dasharray="5 1" />
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.85 0 a 8.42 8.42 0 1 0 -16.85 0" />
      {children}
    </svg>
  );
});

export default SinoRecruit;
