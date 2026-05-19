import React from 'react';

export const iconData = {
  "id": "QuiesHeal",
  "name": "QuiesHeal",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 12.00 a 7.86 7.86 0 1 0 15.71 0 a 7.86 7.86 0 1 0 -15.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 12.00 a 5.62 5.62 0 1 1 11.24 0 a 5.62 5.62 0 1 1 -11.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 12.00 L 21.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.20 17.20 L 18.62 18.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.36 L 12.00 21.36"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 17.20 L 5.38 18.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 12.00 L 2.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 6.80 L 5.38 5.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.64 L 12.00 2.64"
      }
    ],
    [
      "path",
      {
        "d": "M 17.20 6.80 L 18.62 5.38"
      }
    ]
  ]
};

export const QuiesHeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 12.00 a 7.86 7.86 0 1 0 15.71 0 a 7.86 7.86 0 1 0 -15.71 0" />
      <path d="M 6.38 12.00 a 5.62 5.62 0 1 1 11.24 0 a 5.62 5.62 0 1 1 -11.24 0" />
      <path d="M 19.36 12.00 L 21.36 12.00" />
      <path d="M 17.20 17.20 L 18.62 18.62" />
      <path d="M 12.00 19.36 L 12.00 21.36" />
      <path d="M 6.80 17.20 L 5.38 18.62" />
      <path d="M 4.64 12.00 L 2.64 12.00" />
      <path d="M 6.80 6.80 L 5.38 5.38" />
      <path d="M 12.00 4.64 L 12.00 2.64" />
      <path d="M 17.20 6.80 L 18.62 5.38" />
      {children}
    </svg>
  );
});

export default QuiesHeal;
