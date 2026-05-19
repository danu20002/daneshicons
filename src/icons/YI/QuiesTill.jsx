import React from 'react';

export const iconData = {
  "id": "QuiesTill",
  "name": "QuiesTill",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 15.10 C 17.48 18.28, 10.24 8.69, 12.25 2.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 6.44 Q 16.03 11.36 4.45 13.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 10.42 A 4.45 5.32 177 0 0 7.29 12.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.15 5.00 A 6.30 4.09 26 0 0 21.93 13.20"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 12.09 Q 14.32 18.13 20.59 6.82"
      }
    ]
  ]
};

export const QuiesTill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 15.10 C 17.48 18.28, 10.24 8.69, 12.25 2.44" />
      <path d="M 5.32 6.44 Q 16.03 11.36 4.45 13.33" />
      <path d="M 4.59 10.42 A 4.45 5.32 177 0 0 7.29 12.27" />
      <path d="M 20.15 5.00 A 6.30 4.09 26 0 0 21.93 13.20" />
      <path d="M 2.60 12.09 Q 14.32 18.13 20.59 6.82" />
      {children}
    </svg>
  );
});

export default QuiesTill;
