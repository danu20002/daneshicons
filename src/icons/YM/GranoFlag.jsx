import React from 'react';

export const iconData = {
  "id": "GranoFlag",
  "name": "GranoFlag",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.77 12.00 a 9.23 9.23 0 1 0 18.45 0 a 9.23 9.23 0 1 0 -18.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.77 12.00 a 9.23 2.768104541301727 0 1 0 18.45 0 a 9.23 2.768104541301727 0 1 0 -18.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 5.48 A 2 2 0 0 0 18.52 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 5.48 A 2 2 0 0 1 18.52 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.77 A 2 2 0 0 0 12.00 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.77 A 2 2 0 0 1 12.00 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 5.48 A 2 2 0 0 0 5.48 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 5.48 A 2 2 0 0 1 5.48 18.52"
      }
    ]
  ]
};

export const GranoFlag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.77 12.00 a 9.23 9.23 0 1 0 18.45 0 a 9.23 9.23 0 1 0 -18.45 0" />
      <path d="M 2.77 12.00 a 9.23 2.768104541301727 0 1 0 18.45 0 a 9.23 2.768104541301727 0 1 0 -18.45 0" />
      <path d="M 18.52 5.48 A 2 2 0 0 0 18.52 18.52" />
      <path d="M 18.52 5.48 A 2 2 0 0 1 18.52 18.52" />
      <path d="M 12.00 2.77 A 2 2 0 0 0 12.00 21.23" />
      <path d="M 12.00 2.77 A 2 2 0 0 1 12.00 21.23" />
      <path d="M 5.48 5.48 A 2 2 0 0 0 5.48 18.52" />
      <path d="M 5.48 5.48 A 2 2 0 0 1 5.48 18.52" />
      {children}
    </svg>
  );
});

export default GranoFlag;
