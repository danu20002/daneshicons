import React from 'react';

export const iconData = {
  "id": "TestoCave",
  "name": "TestoCave",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 12.00 a 4.04 4.04 0 1 0 8.08 0 a 4.04 4.04 0 1 0 -8.08 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 12.00 a 6.09 6.09 0 1 0 12.18 0 a 6.09 6.09 0 1 0 -12.18 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0"
      }
    ]
  ]
};

export const TestoCave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.55 0 a 2.28 2.28 0 1 0 -4.55 0" stroke-dasharray="4 2" />
      <path d="M 7.96 12.00 a 4.04 4.04 0 1 0 8.08 0 a 4.04 4.04 0 1 0 -8.08 0" stroke-dasharray="6 2" />
      <path d="M 5.91 12.00 a 6.09 6.09 0 1 0 12.18 0 a 6.09 6.09 0 1 0 -12.18 0" stroke-dasharray="2 1" />
      <path d="M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0" />
      {children}
    </svg>
  );
});

export default TestoCave;
