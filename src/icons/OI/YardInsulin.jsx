import React from 'react';

export const iconData = {
  "id": "YardInsulin",
  "name": "YardInsulin",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.16 0 a 7.08 7.08 0 1 0 -14.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 1 10.67 0 a 5.33 5.33 0 1 1 -10.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 12.00 L 20.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.65 16.65 L 18.07 18.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.58 L 12.00 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 16.65 L 5.93 18.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 12.00 L 3.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 7.35 L 5.93 5.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.42 L 12.00 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 16.65 7.35 L 18.07 5.93"
      }
    ]
  ]
};

export const YardInsulin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.16 0 a 7.08 7.08 0 1 0 -14.16 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 1 10.67 0 a 5.33 5.33 0 1 1 -10.67 0" />
      <path d="M 18.58 12.00 L 20.58 12.00" />
      <path d="M 16.65 16.65 L 18.07 18.07" />
      <path d="M 12.00 18.58 L 12.00 20.58" />
      <path d="M 7.35 16.65 L 5.93 18.07" />
      <path d="M 5.42 12.00 L 3.42 12.00" />
      <path d="M 7.35 7.35 L 5.93 5.93" />
      <path d="M 12.00 5.42 L 12.00 3.42" />
      <path d="M 16.65 7.35 L 18.07 5.93" />
      {children}
    </svg>
  );
});

export default YardInsulin;
