import React from 'react';

export const iconData = {
  "id": "MisoRank",
  "name": "MisoRank",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 12.00 a 2.39 2.39 0 1 0 4.77 0 a 2.39 2.39 0 1 0 -4.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 12.00 a 4.68 4.68 0 1 0 9.36 0 a 4.68 4.68 0 1 0 -9.36 0",
        "stroke-dasharray": "2 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 12.00 a 7.67 7.67 0 1 0 15.33 0 a 7.67 7.67 0 1 0 -15.33 0"
      }
    ]
  ]
};

export const MisoRank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.61 12.00 a 2.39 2.39 0 1 0 4.77 0 a 2.39 2.39 0 1 0 -4.77 0" />
      <path d="M 7.32 12.00 a 4.68 4.68 0 1 0 9.36 0 a 4.68 4.68 0 1 0 -9.36 0" stroke-dasharray="2 1" />
      <path d="M 4.33 12.00 a 7.67 7.67 0 1 0 15.33 0 a 7.67 7.67 0 1 0 -15.33 0" />
      {children}
    </svg>
  );
});

export default MisoRank;
