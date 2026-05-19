import React from 'react';

export const iconData = {
  "id": "TantoKey",
  "name": "TantoKey",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 12.00 a 8.92 8.92 0 1 0 17.84 0 a 8.92 8.92 0 1 0 -17.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 6.65 a 7.14 2.141282188519835 0 1 0 14.28 0 a 7.14 2.141282188519835 0 1 0 -14.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 10.22 a 8.74 2.6225243785918257 0 1 0 17.48 0 a 8.74 2.6225243785918257 0 1 0 -17.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 13.78 a 8.74 2.6225243785918257 0 1 0 17.48 0 a 8.74 2.6225243785918257 0 1 0 -17.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 17.35 a 7.14 2.141282188519835 0 1 0 14.28 0 a 7.14 2.141282188519835 0 1 0 -14.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.08 A 2 2 0 0 0 12.00 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.08 A 2 2 0 0 1 12.00 20.92"
      }
    ]
  ]
};

export const TantoKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 12.00 a 8.92 8.92 0 1 0 17.84 0 a 8.92 8.92 0 1 0 -17.84 0" />
      <path d="M 4.86 6.65 a 7.14 2.141282188519835 0 1 0 14.28 0 a 7.14 2.141282188519835 0 1 0 -14.28 0" />
      <path d="M 3.26 10.22 a 8.74 2.6225243785918257 0 1 0 17.48 0 a 8.74 2.6225243785918257 0 1 0 -17.48 0" />
      <path d="M 3.26 13.78 a 8.74 2.6225243785918257 0 1 0 17.48 0 a 8.74 2.6225243785918257 0 1 0 -17.48 0" />
      <path d="M 4.86 17.35 a 7.14 2.141282188519835 0 1 0 14.28 0 a 7.14 2.141282188519835 0 1 0 -14.28 0" />
      <path d="M 12.00 3.08 A 2 2 0 0 0 12.00 20.92" />
      <path d="M 12.00 3.08 A 2 2 0 0 1 12.00 20.92" />
      {children}
    </svg>
  );
});

export default TantoKey;
