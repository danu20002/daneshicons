import React from 'react';

export const iconData = {
  "id": "GamaThreshold",
  "name": "GamaThreshold",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 6.92 L 19.29 6.92 L 19.29 17.08 L 4.71 17.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 6.92 L 9.16 2.47 L 23.74 2.47 L 19.29 6.92"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 6.92 L 23.74 2.47 L 23.74 12.63 L 19.29 17.08"
      }
    ]
  ]
};

export const GamaThreshold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 6.92 L 19.29 6.92 L 19.29 17.08 L 4.71 17.08 Z" />
      <path d="M 4.71 6.92 L 9.16 2.47 L 23.74 2.47 L 19.29 6.92" />
      <path d="M 19.29 6.92 L 23.74 2.47 L 23.74 12.63 L 19.29 17.08" />
      {children}
    </svg>
  );
});

export default GamaThreshold;
