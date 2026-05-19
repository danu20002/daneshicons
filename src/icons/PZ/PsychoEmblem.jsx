import React from 'react';

export const iconData = {
  "id": "PsychoEmblem",
  "name": "PsychoEmblem",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.31 21.65 L 10.04 14.70 L 1.49 10.90 L 10.64 8.96 L 18.20 3.45 L 15.31 12.35 Z"
      }
    ]
  ]
};

export const PsychoEmblem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.31 21.65 L 10.04 14.70 L 1.49 10.90 L 10.64 8.96 L 18.20 3.45 L 15.31 12.35 Z" />
      {children}
    </svg>
  );
});

export default PsychoEmblem;
