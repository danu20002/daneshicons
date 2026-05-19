import React from 'react';

export const iconData = {
  "id": "TigroPalate",
  "name": "TigroPalate",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.15 12.00 L 15.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 12.00 L 12.15 9.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 12.00 L 12.15 14.40"
      }
    ]
  ]
};

export const TigroPalate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.15 12.00 L 15.85 12.00" />
      <path d="M 8.15 12.00 L 12.15 9.60" />
      <path d="M 8.15 12.00 L 12.15 14.40" />
      {children}
    </svg>
  );
});

export default TigroPalate;
