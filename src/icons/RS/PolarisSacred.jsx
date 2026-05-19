import React from 'react';

export const iconData = {
  "id": "PolarisSacred",
  "name": "PolarisSacred",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.50 10.15 L 11.50 10.15"
      }
    ],
    [
      "path",
      {
        "d": "M 13.85 7.50 L 13.85 11.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 13.85 L 12.50 13.85"
      }
    ],
    [
      "path",
      {
        "d": "M 10.15 16.50 L 10.15 12.50"
      }
    ]
  ]
};

export const PolarisSacred = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.50 10.15 L 11.50 10.15" />
      <path d="M 13.85 7.50 L 13.85 11.50" />
      <path d="M 16.50 13.85 L 12.50 13.85" />
      <path d="M 10.15 16.50 L 10.15 12.50" />
      {children}
    </svg>
  );
});

export default PolarisSacred;
