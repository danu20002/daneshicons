import React from 'react';

export const iconData = {
  "id": "SensoOnion",
  "name": "SensoOnion",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.94 10.02 L 10.96 8.94 L 18.74 4.28 L 15.17 12.63 L 15.31 21.70 L 9.87 14.44 Z"
      }
    ]
  ]
};

export const SensoOnion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.94 10.02 L 10.96 8.94 L 18.74 4.28 L 15.17 12.63 L 15.31 21.70 L 9.87 14.44 Z" />
      {children}
    </svg>
  );
});

export default SensoOnion;
