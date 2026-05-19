import React from 'react';

export const iconData = {
  "id": "ClaroPivot",
  "name": "ClaroPivot",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.08 9.09 L 21.18 12.15 L 14.77 2.58 L 6.62 9.04 L 18.41 17.72 L 3.38 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 18.15 Q 20.81 16.19 4.82 12.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 20.33 L 2.69 4.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 20.63 L 18.86 6.76 L 19.79 11.65 L 21.44 7.67 L 16.39 15.08 L 18.58 5.01"
      }
    ]
  ]
};

export const ClaroPivot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.08 9.09 L 21.18 12.15 L 14.77 2.58 L 6.62 9.04 L 18.41 17.72 L 3.38 21.30" />
      <path d="M 4.22 18.15 Q 20.81 16.19 4.82 12.98" />
      <path d="M 6.95 20.33 L 2.69 4.59" />
      <path d="M 3.56 20.63 L 18.86 6.76 L 19.79 11.65 L 21.44 7.67 L 16.39 15.08 L 18.58 5.01" />
      {children}
    </svg>
  );
});

export default ClaroPivot;
