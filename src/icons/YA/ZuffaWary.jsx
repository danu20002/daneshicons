import React from 'react';

export const iconData = {
  "id": "ZuffaWary",
  "name": "ZuffaWary",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.80 2.88 L 14.75 9.44 L 21.30 9.87 L 15.59 13.10 L 18.50 18.98 L 12.84 15.66 L 9.20 21.12 L 9.25 14.56 L 2.70 14.13 L 8.41 10.90 L 5.50 5.02 L 11.16 8.34 Z"
      }
    ]
  ]
};

export const ZuffaWary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.80 2.88 L 14.75 9.44 L 21.30 9.87 L 15.59 13.10 L 18.50 18.98 L 12.84 15.66 L 9.20 21.12 L 9.25 14.56 L 2.70 14.13 L 8.41 10.90 L 5.50 5.02 L 11.16 8.34 Z" />
      {children}
    </svg>
  );
});

export default ZuffaWary;
