import React from 'react';

export const iconData = {
  "id": "VisioneLose",
  "name": "VisioneLose",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.59 0 a 2.30 2.30 0 1 0 -4.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 12.00 a 6.16 6.16 0 1 0 12.32 0 a 6.16 6.16 0 1 0 -12.32 0"
      }
    ]
  ]
};

export const VisioneLose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.59 0 a 2.30 2.30 0 1 0 -4.59 0" />
      <path d="M 5.84 12.00 a 6.16 6.16 0 1 0 12.32 0 a 6.16 6.16 0 1 0 -12.32 0" />
      {children}
    </svg>
  );
});

export default VisioneLose;
