import React from 'react';

export const iconData = {
  "id": "RupoGrand",
  "name": "RupoGrand",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.55 18.47 L 12.81 16.94 L 7.87 20.23 L 7.55 14.30 L 2.90 10.62 L 8.44 8.48 L 10.50 2.92 L 14.25 7.52 L 20.18 7.77 L 16.95 12.75 Z"
      }
    ]
  ]
};

export const RupoGrand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.55 18.47 L 12.81 16.94 L 7.87 20.23 L 7.55 14.30 L 2.90 10.62 L 8.44 8.48 L 10.50 2.92 L 14.25 7.52 L 20.18 7.77 L 16.95 12.75 Z" />
      {children}
    </svg>
  );
});

export default RupoGrand;
