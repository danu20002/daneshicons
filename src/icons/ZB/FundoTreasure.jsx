import React from 'react';

export const iconData = {
  "id": "FundoTreasure",
  "name": "FundoTreasure",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.75 9.18 C 2.99 14.62, 20.58 5.71, 21.19 9.70"
      }
    ],
    [
      "path",
      {
        "d": "M 21.26 21.84 C 11.78 21.23, 2.75 5.23, 4.01 9.67"
      }
    ]
  ]
};

export const FundoTreasure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.75 9.18 C 2.99 14.62, 20.58 5.71, 21.19 9.70" />
      <path d="M 21.26 21.84 C 11.78 21.23, 2.75 5.23, 4.01 9.67" />
      {children}
    </svg>
  );
});

export default FundoTreasure;
