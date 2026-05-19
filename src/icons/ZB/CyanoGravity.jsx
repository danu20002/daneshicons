import React from 'react';

export const iconData = {
  "id": "CyanoGravity",
  "name": "CyanoGravity",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.82 15.11 A 2.75 2.60 81 0 1 7.02 12.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 16.85 L 12.90 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.01 13.10 Q 2.45 8.65 12.03 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 13.93 2.18 L 5.76 17.48"
      }
    ]
  ]
};

export const CyanoGravity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.82 15.11 A 2.75 2.60 81 0 1 7.02 12.11" />
      <path d="M 9.47 16.85 L 12.90 16.92" />
      <path d="M 12.01 13.10 Q 2.45 8.65 12.03 17.56" />
      <path d="M 13.93 2.18 L 5.76 17.48" />
      {children}
    </svg>
  );
});

export default CyanoGravity;
