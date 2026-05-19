import React from 'react';

export const iconData = {
  "id": "RenoThank",
  "name": "RenoThank",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.94 6.42 A 6.37 3.75 65 0 1 12.79 8.15"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 8.84 L 10.27 4.00 L 5.52 12.24 L 10.38 8.63"
      }
    ],
    [
      "path",
      {
        "d": "M 15.61 4.86 A 4.68 4.74 19 0 1 16.92 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 14.37 Q 17.70 14.04 7.35 5.49"
      }
    ]
  ]
};

export const RenoThank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.94 6.42 A 6.37 3.75 65 0 1 12.79 8.15" />
      <path d="M 15.31 8.84 L 10.27 4.00 L 5.52 12.24 L 10.38 8.63" />
      <path d="M 15.61 4.86 A 4.68 4.74 19 0 1 16.92 20.52" />
      <path d="M 7.31 14.37 Q 17.70 14.04 7.35 5.49" />
      {children}
    </svg>
  );
});

export default RenoThank;
