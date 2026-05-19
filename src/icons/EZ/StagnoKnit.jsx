import React from 'react';

export const iconData = {
  "id": "StagnoKnit",
  "name": "StagnoKnit",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.66 16.42 L 14.71 15.17 L 15.00 21.25 L 11.67 16.16 L 7.58 20.66 L 8.83 14.71 L 2.75 15.00 L 7.84 11.67 L 3.34 7.58 L 9.29 8.83 L 9.00 2.75 L 12.33 7.84 L 16.42 3.34 L 15.17 9.29 L 21.25 9.00 L 16.16 12.33 Z"
      }
    ]
  ]
};

export const StagnoKnit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.66 16.42 L 14.71 15.17 L 15.00 21.25 L 11.67 16.16 L 7.58 20.66 L 8.83 14.71 L 2.75 15.00 L 7.84 11.67 L 3.34 7.58 L 9.29 8.83 L 9.00 2.75 L 12.33 7.84 L 16.42 3.34 L 15.17 9.29 L 21.25 9.00 L 16.16 12.33 Z" />
      {children}
    </svg>
  );
});

export default StagnoKnit;
