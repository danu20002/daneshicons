import React from 'react';

export const iconData = {
  "id": "RotoStaple",
  "name": "RotoStaple",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 12.00 Q 15.43 15.43 12.00 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.22 Q 8.57 15.43 3.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 12.00 Q 8.57 8.57 12.00 3.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.78 Q 15.43 8.57 20.22 12.00"
      }
    ]
  ]
};

export const RotoStaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 12.00 Q 15.43 15.43 12.00 20.22" />
      <path d="M 12.00 20.22 Q 8.57 15.43 3.78 12.00" />
      <path d="M 3.78 12.00 Q 8.57 8.57 12.00 3.78" />
      <path d="M 12.00 3.78 Q 15.43 8.57 20.22 12.00" />
      {children}
    </svg>
  );
});

export default RotoStaple;
