import React from 'react';

export const iconData = {
  "id": "TrigonDivide",
  "name": "TrigonDivide",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.62 5.04 C 8.40 8.82, 10.10 19.87, 18.12 17.34"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 5.03 C 6.68 5.60, 15.78 19.53, 16.28 14.03"
      }
    ],
    [
      "path",
      {
        "d": "M 9.28 6.38 C 10.41 7.87, 4.43 17.54, 19.16 14.89"
      }
    ]
  ]
};

export const TrigonDivide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.62 5.04 C 8.40 8.82, 10.10 19.87, 18.12 17.34" />
      <path d="M 6.40 5.03 C 6.68 5.60, 15.78 19.53, 16.28 14.03" />
      <path d="M 9.28 6.38 C 10.41 7.87, 4.43 17.54, 19.16 14.89" />
      {children}
    </svg>
  );
});

export default TrigonDivide;
