import React from 'react';

export const iconData = {
  "id": "VeraceHope",
  "name": "VeraceHope",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 12.00 a 3.88 3.88 0 1 0 7.75 0 a 3.88 3.88 0 1 0 -7.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 12.00 a 5.22 5.22 0 1 0 10.45 0 a 5.22 5.22 0 1 0 -10.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.07 0 a 7.04 7.04 0 1 0 -14.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0",
        "stroke-dasharray": "6 1"
      }
    ]
  ]
};

export const VeraceHope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0" />
      <path d="M 8.12 12.00 a 3.88 3.88 0 1 0 7.75 0 a 3.88 3.88 0 1 0 -7.75 0" />
      <path d="M 6.78 12.00 a 5.22 5.22 0 1 0 10.45 0 a 5.22 5.22 0 1 0 -10.45 0" />
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.07 0 a 7.04 7.04 0 1 0 -14.07 0" />
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0" stroke-dasharray="6 1" />
      {children}
    </svg>
  );
});

export default VeraceHope;
