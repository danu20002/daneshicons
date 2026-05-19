import React from 'react';

export const iconData = {
  "id": "TaccoLily",
  "name": "TaccoLily",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 6.70 L 19.20 6.70 L 19.20 17.30 L 4.80 17.30 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.80 6.70 L 9.31 2.18 L 23.72 2.18 L 19.20 6.70"
      }
    ],
    [
      "path",
      {
        "d": "M 19.20 6.70 L 23.72 2.18 L 23.72 12.79 L 19.20 17.30"
      }
    ]
  ]
};

export const TaccoLily = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 6.70 L 19.20 6.70 L 19.20 17.30 L 4.80 17.30 Z" />
      <path d="M 4.80 6.70 L 9.31 2.18 L 23.72 2.18 L 19.20 6.70" />
      <path d="M 19.20 6.70 L 23.72 2.18 L 23.72 12.79 L 19.20 17.30" />
      {children}
    </svg>
  );
});

export default TaccoLily;
