import React from 'react';

export const iconData = {
  "id": "VerduraProspect",
  "name": "VerduraProspect",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 6.08 L 19.84 6.08 L 19.84 17.92 L 4.16 17.92 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 6.08 L 8.35 1.89 L 24.02 1.89 L 19.84 6.08"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 6.08 L 24.02 1.89 L 24.02 13.73 L 19.84 17.92"
      }
    ]
  ]
};

export const VerduraProspect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 6.08 L 19.84 6.08 L 19.84 17.92 L 4.16 17.92 Z" />
      <path d="M 4.16 6.08 L 8.35 1.89 L 24.02 1.89 L 19.84 6.08" />
      <path d="M 19.84 6.08 L 24.02 1.89 L 24.02 13.73 L 19.84 17.92" />
      {children}
    </svg>
  );
});

export default VerduraProspect;
