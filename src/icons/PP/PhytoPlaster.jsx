import React from 'react';

export const iconData = {
  "id": "PhytoPlaster",
  "name": "PhytoPlaster",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.33 13.21 L 6.29 19.47 L 8.38 3.32 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.53 14.98 L 6.65 15.30 L 11.82 5.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 14.13 L 9.08 12.80 L 12.77 9.08 Z"
      }
    ]
  ]
};

export const PhytoPlaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.33 13.21 L 6.29 19.47 L 8.38 3.32 Z" />
      <path d="M 17.53 14.98 L 6.65 15.30 L 11.82 5.72 Z" />
      <path d="M 14.15 14.13 L 9.08 12.80 L 12.77 9.08 Z" />
      {children}
    </svg>
  );
});

export default PhytoPlaster;
