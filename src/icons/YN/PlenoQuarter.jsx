import React from 'react';

export const iconData = {
  "id": "PlenoQuarter",
  "name": "PlenoQuarter",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 5.50 L 20.96 5.50 L 20.96 18.50 L 3.04 18.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 5.50 L 7.19 1.35 L 25.11 1.35 L 20.96 5.50"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 5.50 L 25.11 1.35 L 25.11 14.36 L 20.96 18.50"
      }
    ]
  ]
};

export const PlenoQuarter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 5.50 L 20.96 5.50 L 20.96 18.50 L 3.04 18.50 Z" />
      <path d="M 3.04 5.50 L 7.19 1.35 L 25.11 1.35 L 20.96 5.50" />
      <path d="M 20.96 5.50 L 25.11 1.35 L 25.11 14.36 L 20.96 18.50" />
      {children}
    </svg>
  );
});

export default PlenoQuarter;
