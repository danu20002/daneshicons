import React from 'react';

export const iconData = {
  "id": "RenoJustice",
  "name": "RenoJustice",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 13.86 L 9.25 10.20 L 10.14 3.05 L 13.80 9.25 L 20.95 10.14 L 14.75 13.80 L 13.86 20.95 L 10.20 14.75 Z"
      }
    ]
  ]
};

export const RenoJustice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 13.86 L 9.25 10.20 L 10.14 3.05 L 13.80 9.25 L 20.95 10.14 L 14.75 13.80 L 13.86 20.95 L 10.20 14.75 Z" />
      {children}
    </svg>
  );
});

export default RenoJustice;
