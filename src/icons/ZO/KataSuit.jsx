import React from 'react';

export const iconData = {
  "id": "KataSuit",
  "name": "KataSuit",
  "category": "ZO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 12.00 a 2.13 2.13 0 1 0 4.27 0 a 2.13 2.13 0 1 0 -4.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 0 12.29 0 a 6.15 6.15 0 1 0 -12.29 0"
      }
    ]
  ]
};

export const KataSuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 12.00 a 2.13 2.13 0 1 0 4.27 0 a 2.13 2.13 0 1 0 -4.27 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 0 12.29 0 a 6.15 6.15 0 1 0 -12.29 0" />
      {children}
    </svg>
  );
});

export default KataSuit;
