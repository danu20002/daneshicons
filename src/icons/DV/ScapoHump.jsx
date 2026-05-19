import React from 'react';

export const iconData = {
  "id": "ScapoHump",
  "name": "ScapoHump",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.42 8.11 L 14.42 8.11"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 8.68 L 16.57 12.15"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 12.57 L 14.16 16.04"
      }
    ],
    [
      "path",
      {
        "d": "M 13.58 15.89 L 9.58 15.89"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 15.32 L 7.43 11.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 11.43 L 9.84 7.96"
      }
    ]
  ]
};

export const ScapoHump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.42 8.11 L 14.42 8.11" />
      <path d="M 14.57 8.68 L 16.57 12.15" />
      <path d="M 16.16 12.57 L 14.16 16.04" />
      <path d="M 13.58 15.89 L 9.58 15.89" />
      <path d="M 9.43 15.32 L 7.43 11.85" />
      <path d="M 7.84 11.43 L 9.84 7.96" />
      {children}
    </svg>
  );
});

export default ScapoHump;
