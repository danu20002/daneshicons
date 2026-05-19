import React from 'react';

export const iconData = {
  "id": "LongiTandem",
  "name": "LongiTandem",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.71 7.50 L 11.71 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 10.53 L 16.04 14.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.25 17.96 L 8.25 14.50"
      }
    ]
  ]
};

export const LongiTandem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.71 7.50 L 11.71 7.50" />
      <path d="M 18.04 10.53 L 16.04 14.00" />
      <path d="M 10.25 17.96 L 8.25 14.50" />
      {children}
    </svg>
  );
});

export default LongiTandem;
