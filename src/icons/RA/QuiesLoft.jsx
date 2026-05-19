import React from 'react';

export const iconData = {
  "id": "QuiesLoft",
  "name": "QuiesLoft",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.12 18.01 L 11.84 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 15.27 L 11.42 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 16.10 4.52 L 3.04 15.98 L 17.21 13.85 L 9.86 3.24 L 8.46 10.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.59 10.77 Q 5.81 7.79 9.18 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 11.99 19.02 C 16.82 9.58, 13.99 18.51, 18.32 8.50"
      }
    ],
    [
      "path",
      {
        "d": "M 9.49 13.26 L 21.31 5.33 L 12.21 8.14 L 13.70 13.82 L 10.31 2.88 L 6.52 7.72 L 15.98 15.34 L 7.25 21.37"
      }
    ]
  ]
};

export const QuiesLoft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.12 18.01 L 11.84 19.59" />
      <path d="M 8.01 15.27 L 11.42 17.78" />
      <path d="M 16.10 4.52 L 3.04 15.98 L 17.21 13.85 L 9.86 3.24 L 8.46 10.60" />
      <path d="M 12.59 10.77 Q 5.81 7.79 9.18 19.20" />
      <path d="M 11.99 19.02 C 16.82 9.58, 13.99 18.51, 18.32 8.50" />
      <path d="M 9.49 13.26 L 21.31 5.33 L 12.21 8.14 L 13.70 13.82 L 10.31 2.88 L 6.52 7.72 L 15.98 15.34 L 7.25 21.37" />
      {children}
    </svg>
  );
});

export default QuiesLoft;
