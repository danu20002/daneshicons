import React from 'react';

export const iconData = {
  "id": "LavaSession",
  "name": "LavaSession",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 12.00 a 4.37 4.37 0 1 0 8.74 0 a 4.37 4.37 0 1 0 -8.74 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 12.00 a 8.25 8.25 0 1 0 16.50 0 a 8.25 8.25 0 1 0 -16.50 0"
      }
    ]
  ]
};

export const LavaSession = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0" />
      <path d="M 7.63 12.00 a 4.37 4.37 0 1 0 8.74 0 a 4.37 4.37 0 1 0 -8.74 0" stroke-dasharray="3 2" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0" />
      <path d="M 3.75 12.00 a 8.25 8.25 0 1 0 16.50 0 a 8.25 8.25 0 1 0 -16.50 0" />
      {children}
    </svg>
  );
});

export default LavaSession;
