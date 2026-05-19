import React from 'react';

export const iconData = {
  "id": "MarinoPlaster",
  "name": "MarinoPlaster",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.42 8.56 C 14.65 11.13, 5.65 18.15, 21.62 17.03"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 8.63 C 10.62 8.25, 7.13 19.96, 15.17 17.26"
      }
    ],
    [
      "path",
      {
        "d": "M 4.40 6.25 C 16.47 15.43, 12.62 15.66, 19.25 16.32"
      }
    ]
  ]
};

export const MarinoPlaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.42 8.56 C 14.65 11.13, 5.65 18.15, 21.62 17.03" />
      <path d="M 2.04 8.63 C 10.62 8.25, 7.13 19.96, 15.17 17.26" />
      <path d="M 4.40 6.25 C 16.47 15.43, 12.62 15.66, 19.25 16.32" />
      {children}
    </svg>
  );
});

export default MarinoPlaster;
