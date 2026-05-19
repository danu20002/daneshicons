import React from 'react';

export const iconData = {
  "id": "UbertoRole",
  "name": "UbertoRole",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.98 17.52 L 13.94 17.52 L 9.21 21.30 L 7.35 15.55 L 2.29 12.22 L 7.19 8.67 L 8.79 2.84 L 13.68 6.40 L 19.72 6.11 L 17.85 11.86 Z"
      }
    ]
  ]
};

export const UbertoRole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.98 17.52 L 13.94 17.52 L 9.21 21.30 L 7.35 15.55 L 2.29 12.22 L 7.19 8.67 L 8.79 2.84 L 13.68 6.40 L 19.72 6.11 L 17.85 11.86 Z" />
      {children}
    </svg>
  );
});

export default UbertoRole;
