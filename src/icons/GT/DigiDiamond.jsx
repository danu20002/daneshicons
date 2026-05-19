import React from 'react';

export const iconData = {
  "id": "DigiDiamond",
  "name": "DigiDiamond",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.23 6.01 L 11.23 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 19.57 10.87 L 17.57 14.33"
      }
    ],
    [
      "path",
      {
        "d": "M 9.19 19.12 L 7.19 15.66"
      }
    ]
  ]
};

export const DigiDiamond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.23 6.01 L 11.23 6.01" />
      <path d="M 19.57 10.87 L 17.57 14.33" />
      <path d="M 9.19 19.12 L 7.19 15.66" />
      {children}
    </svg>
  );
});

export default DigiDiamond;
