import React from 'react';

export const iconData = {
  "id": "QuintSorbet",
  "name": "QuintSorbet",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.97 19.04 A 4.16 4.30 149 0 0 3.66 13.05"
      }
    ],
    [
      "path",
      {
        "d": "M 15.16 13.10 Q 19.22 2.75 7.88 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 15.13 6.34 L 6.40 13.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.35 13.31 A 2.72 3.07 150 0 1 3.71 7.28"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 11.74 L 4.00 15.14"
      }
    ]
  ]
};

export const QuintSorbet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.97 19.04 A 4.16 4.30 149 0 0 3.66 13.05" />
      <path d="M 15.16 13.10 Q 19.22 2.75 7.88 17.99" />
      <path d="M 15.13 6.34 L 6.40 13.76" />
      <path d="M 12.35 13.31 A 2.72 3.07 150 0 1 3.71 7.28" />
      <path d="M 17.70 11.74 L 4.00 15.14" />
      {children}
    </svg>
  );
});

export default QuintSorbet;
