import React from 'react';

export const iconData = {
  "id": "QuadraSable",
  "name": "QuadraSable",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.04 12.00 a 9.96 9.96 0 1 0 19.92 0 a 9.96 9.96 0 1 0 -19.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 7.02 a 8.62 2.5874363646301908 0 1 0 17.25 0 a 8.62 2.5874363646301908 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 12.00 a 9.96 2.9877141632605344 0 1 0 19.92 0 a 9.96 2.9877141632605344 0 1 0 -19.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 16.98 a 8.62 2.5874363646301908 0 1 0 17.25 0 a 8.62 2.5874363646301908 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.04 A 2 2 0 0 0 12.00 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.04 A 2 2 0 0 1 12.00 21.96"
      }
    ]
  ]
};

export const QuadraSable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.04 12.00 a 9.96 9.96 0 1 0 19.92 0 a 9.96 9.96 0 1 0 -19.92 0" />
      <path d="M 3.38 7.02 a 8.62 2.5874363646301908 0 1 0 17.25 0 a 8.62 2.5874363646301908 0 1 0 -17.25 0" />
      <path d="M 2.04 12.00 a 9.96 2.9877141632605344 0 1 0 19.92 0 a 9.96 2.9877141632605344 0 1 0 -19.92 0" />
      <path d="M 3.38 16.98 a 8.62 2.5874363646301908 0 1 0 17.25 0 a 8.62 2.5874363646301908 0 1 0 -17.25 0" />
      <path d="M 12.00 2.04 A 2 2 0 0 0 12.00 21.96" />
      <path d="M 12.00 2.04 A 2 2 0 0 1 12.00 21.96" />
      {children}
    </svg>
  );
});

export default QuadraSable;
