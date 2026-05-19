import React from 'react';

export const iconData = {
  "id": "VentriloSatellite",
  "name": "VentriloSatellite",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.71 12.03 Q 16.68 7.54 16.42 20.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 18.30 L 9.32 16.71"
      }
    ]
  ]
};

export const VentriloSatellite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.71 12.03 Q 16.68 7.54 16.42 20.74" />
      <path d="M 6.10 18.30 L 9.32 16.71" />
      {children}
    </svg>
  );
});

export default VentriloSatellite;
