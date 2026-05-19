import React from 'react';

export const iconData = {
  "id": "UrceoSport",
  "name": "UrceoSport",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.97 1.92 L 13.66 8.51 L 19.86 5.69 L 15.76 11.13 L 21.84 14.21 L 15.03 14.40 L 16.41 21.07 L 12.01 15.86 L 7.66 21.10 L 8.99 14.42 L 2.18 14.28 L 8.23 11.15 L 4.10 5.74 L 10.31 8.53 Z"
      }
    ]
  ]
};

export const UrceoSport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.97 1.92 L 13.66 8.51 L 19.86 5.69 L 15.76 11.13 L 21.84 14.21 L 15.03 14.40 L 16.41 21.07 L 12.01 15.86 L 7.66 21.10 L 8.99 14.42 L 2.18 14.28 L 8.23 11.15 L 4.10 5.74 L 10.31 8.53 Z" />
      {children}
    </svg>
  );
});

export default UrceoSport;
