import React from 'react';

export const iconData = {
  "id": "TirsoHell",
  "name": "TirsoHell",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.27 7.42 C 11.46 18.10, 11.57 19.57, 19.01 15.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 8.86 C 6.75 17.04, 15.97 16.23, 18.21 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 6.54 C 7.40 7.76, 9.03 14.87, 18.74 17.01"
      }
    ],
    [
      "path",
      {
        "d": "M 9.21 9.68 C 18.70 7.91, 18.13 16.85, 15.99 14.78"
      }
    ]
  ]
};

export const TirsoHell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.27 7.42 C 11.46 18.10, 11.57 19.57, 19.01 15.08" />
      <path d="M 7.12 8.86 C 6.75 17.04, 15.97 16.23, 18.21 17.30" />
      <path d="M 2.73 6.54 C 7.40 7.76, 9.03 14.87, 18.74 17.01" />
      <path d="M 9.21 9.68 C 18.70 7.91, 18.13 16.85, 15.99 14.78" />
      {children}
    </svg>
  );
});

export default TirsoHell;
