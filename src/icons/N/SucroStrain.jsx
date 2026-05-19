import React from 'react';

export const iconData = {
  "id": "SucroStrain",
  "name": "SucroStrain",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.36 12.00 L 16.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 12.00 L 11.77 9.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 12.00 L 11.77 14.92"
      }
    ]
  ]
};

export const SucroStrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.36 12.00 L 16.64 12.00" />
      <path d="M 16.64 12.00 L 11.77 9.08" />
      <path d="M 16.64 12.00 L 11.77 14.92" />
      {children}
    </svg>
  );
});

export default SucroStrain;
