import React from 'react';

export const iconData = {
  "id": "TossicoStall",
  "name": "TossicoStall",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.87 9.32 L 9.16 8.52 L 11.42 1.54 L 14.43 8.23 L 21.77 8.21 L 16.34 13.15 L 18.62 20.12 L 12.25 16.48 L 6.32 20.81 L 7.82 13.62 Z"
      }
    ]
  ]
};

export const TossicoStall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.87 9.32 L 9.16 8.52 L 11.42 1.54 L 14.43 8.23 L 21.77 8.21 L 16.34 13.15 L 18.62 20.12 L 12.25 16.48 L 6.32 20.81 L 7.82 13.62 Z" />
      {children}
    </svg>
  );
});

export default TossicoStall;
