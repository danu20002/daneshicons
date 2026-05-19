import React from 'react';

export const iconData = {
  "id": "TintinnPilot",
  "name": "TintinnPilot",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.19 9.75 C 6.98 7.94, 13.96 11.28, 14.71 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 9.89 C 16.38 10.09, 9.24 7.86, 14.94 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 7.04 C 13.99 8.19, 9.94 4.41, 14.18 19.38"
      }
    ]
  ]
};

export const TintinnPilot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.19 9.75 C 6.98 7.94, 13.96 11.28, 14.71 17.02" />
      <path d="M 5.50 9.89 C 16.38 10.09, 9.24 7.86, 14.94 19.12" />
      <path d="M 5.58 7.04 C 13.99 8.19, 9.94 4.41, 14.18 19.38" />
      {children}
    </svg>
  );
});

export default TintinnPilot;
