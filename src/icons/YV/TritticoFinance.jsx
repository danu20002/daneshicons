import React from 'react';

export const iconData = {
  "id": "TritticoFinance",
  "name": "TritticoFinance",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 12.00 a 4.84 4.84 0 1 0 9.69 0 a 4.84 4.84 0 1 0 -9.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0"
      }
    ]
  ]
};

export const TritticoFinance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0" />
      <path d="M 7.16 12.00 a 4.84 4.84 0 1 0 9.69 0 a 4.84 4.84 0 1 0 -9.69 0" />
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0" />
      {children}
    </svg>
  );
});

export default TritticoFinance;
