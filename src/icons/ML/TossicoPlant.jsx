import React from 'react';

export const iconData = {
  "id": "TossicoPlant",
  "name": "TossicoPlant",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.09 9.43 C 10.42 10.71, 12.89 9.90, 18.94 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 2.23 9.95 C 12.35 18.68, 14.69 18.05, 19.80 20.71"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 6.41 C 15.96 9.93, 12.37 16.47, 19.25 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 7.19 C 10.13 5.22, 13.32 16.46, 14.50 17.65"
      }
    ]
  ]
};

export const TossicoPlant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.09 9.43 C 10.42 10.71, 12.89 9.90, 18.94 20.64" />
      <path d="M 2.23 9.95 C 12.35 18.68, 14.69 18.05, 19.80 20.71" />
      <path d="M 7.56 6.41 C 15.96 9.93, 12.37 16.47, 19.25 21.18" />
      <path d="M 6.29 7.19 C 10.13 5.22, 13.32 16.46, 14.50 17.65" />
      {children}
    </svg>
  );
});

export default TossicoPlant;
