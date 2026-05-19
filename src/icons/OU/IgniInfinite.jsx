import React from 'react';

export const iconData = {
  "id": "IgniInfinite",
  "name": "IgniInfinite",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.05 12.00 Q 14.06 14.06 12.00 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.05 Q 9.94 14.06 2.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.95 12.00 Q 9.94 9.94 12.00 2.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.95 Q 14.06 9.94 21.05 12.00"
      }
    ]
  ]
};

export const IgniInfinite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.05 12.00 Q 14.06 14.06 12.00 21.05" />
      <path d="M 12.00 21.05 Q 9.94 14.06 2.95 12.00" />
      <path d="M 2.95 12.00 Q 9.94 9.94 12.00 2.95" />
      <path d="M 12.00 2.95 Q 14.06 9.94 21.05 12.00" />
      {children}
    </svg>
  );
});

export default IgniInfinite;
