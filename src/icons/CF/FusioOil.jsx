import React from 'react';

export const iconData = {
  "id": "FusioOil",
  "name": "FusioOil",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.84 9.46 C 11.68 18.39, 6.86 4.18, 19.73 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 6.87 C 5.99 11.80, 5.51 9.33, 14.17 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 3.31 C 16.11 4.21, 19.10 18.76, 14.78 15.65"
      }
    ]
  ]
};

export const FusioOil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.84 9.46 C 11.68 18.39, 6.86 4.18, 19.73 17.14" />
      <path d="M 7.73 6.87 C 5.99 11.80, 5.51 9.33, 14.17 18.52" />
      <path d="M 4.44 3.31 C 16.11 4.21, 19.10 18.76, 14.78 15.65" />
      {children}
    </svg>
  );
});

export default FusioOil;
