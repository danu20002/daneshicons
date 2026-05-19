import React from 'react';

export const iconData = {
  "id": "YachtMile",
  "name": "YachtMile",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.88 6.05 L 14.88 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 14.01 L 15.71 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 15.94 L 5.41 12.48"
      }
    ]
  ]
};

export const YachtMile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.88 6.05 L 14.88 6.05" />
      <path d="M 17.71 14.01 L 15.71 17.47" />
      <path d="M 7.41 15.94 L 5.41 12.48" />
      {children}
    </svg>
  );
});

export default YachtMile;
