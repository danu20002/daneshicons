import React from 'react';

export const iconData = {
  "id": "TestoMoment",
  "name": "TestoMoment",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 11.33 L 13.78 11.33"
      }
    ],
    [
      "path",
      {
        "d": "M 11.95 9.68 L 13.19 13.48"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 11.24 L 10.95 13.59"
      }
    ],
    [
      "path",
      {
        "d": "M 13.40 13.85 L 10.17 11.50"
      }
    ],
    [
      "path",
      {
        "d": "M 10.68 13.91 L 11.91 10.10"
      }
    ]
  ]
};

export const TestoMoment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 11.33 L 13.78 11.33" />
      <path d="M 11.95 9.68 L 13.19 13.48" />
      <path d="M 14.19 11.24 L 10.95 13.59" />
      <path d="M 13.40 13.85 L 10.17 11.50" />
      <path d="M 10.68 13.91 L 11.91 10.10" />
      {children}
    </svg>
  );
});

export default TestoMoment;
