import React from 'react';

export const iconData = {
  "id": "VellutoElastic",
  "name": "VellutoElastic",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 6.74 C 3.15 9.84, 15.01 12.85, 2.20 3.51"
      }
    ],
    [
      "path",
      {
        "d": "M 20.94 21.23 A 4.76 6.23 168 0 0 21.62 7.72"
      }
    ]
  ]
};

export const VellutoElastic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 6.74 C 3.15 9.84, 15.01 12.85, 2.20 3.51" />
      <path d="M 20.94 21.23 A 4.76 6.23 168 0 0 21.62 7.72" />
      {children}
    </svg>
  );
});

export default VellutoElastic;
