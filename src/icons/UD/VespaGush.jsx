import React from 'react';

export const iconData = {
  "id": "VespaGush",
  "name": "VespaGush",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.02 6.90 L 19.98 6.90 L 19.98 17.10 L 4.02 17.10 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 6.90 L 8.08 2.85 L 24.03 2.85 L 19.98 6.90"
      }
    ],
    [
      "path",
      {
        "d": "M 19.98 6.90 L 24.03 2.85 L 24.03 13.04 L 19.98 17.10"
      }
    ]
  ]
};

export const VespaGush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.02 6.90 L 19.98 6.90 L 19.98 17.10 L 4.02 17.10 Z" />
      <path d="M 4.02 6.90 L 8.08 2.85 L 24.03 2.85 L 19.98 6.90" />
      <path d="M 19.98 6.90 L 24.03 2.85 L 24.03 13.04 L 19.98 17.10" />
      {children}
    </svg>
  );
});

export default VespaGush;
