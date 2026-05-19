import React from 'react';

export const iconData = {
  "id": "UmbroTable",
  "name": "UmbroTable",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.54 17.82 L 10.90 19.96 L 5.09 16.11 L 4.48 9.16 L 9.53 4.35 L 16.44 5.30 L 20.01 11.30 Z"
      }
    ]
  ]
};

export const UmbroTable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.54 17.82 L 10.90 19.96 L 5.09 16.11 L 4.48 9.16 L 9.53 4.35 L 16.44 5.30 L 20.01 11.30 Z" />
      {children}
    </svg>
  );
});

export default UmbroTable;
