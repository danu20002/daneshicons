import React from 'react';

export const iconData = {
  "id": "HemaStew",
  "name": "HemaStew",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.65 10.32 L 7.92 9.48 L 5.87 3.50 L 10.90 7.34 L 13.68 1.65 L 14.52 7.92 L 20.50 5.87 L 16.66 10.90 L 22.35 13.68 L 16.08 14.52 L 18.13 20.50 L 13.10 16.66 L 10.32 22.35 L 9.48 16.08 L 3.50 18.13 L 7.34 13.10 Z"
      }
    ]
  ]
};

export const HemaStew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.65 10.32 L 7.92 9.48 L 5.87 3.50 L 10.90 7.34 L 13.68 1.65 L 14.52 7.92 L 20.50 5.87 L 16.66 10.90 L 22.35 13.68 L 16.08 14.52 L 18.13 20.50 L 13.10 16.66 L 10.32 22.35 L 9.48 16.08 L 3.50 18.13 L 7.34 13.10 Z" />
      {children}
    </svg>
  );
});

export default HemaStew;
