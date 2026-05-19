import React from 'react';

export const iconData = {
  "id": "HibernoTalk",
  "name": "HibernoTalk",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.40 12.00 a 9.60 9.60 0 1 0 19.19 0 a 9.60 9.60 0 1 0 -19.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 7.20 a 8.31 2.493288916181154 0 1 0 16.62 0 a 8.31 2.493288916181154 0 1 0 -16.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.40 12.00 a 9.60 2.879002053849399 0 1 0 19.19 0 a 9.60 2.879002053849399 0 1 0 -19.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 16.80 a 8.31 2.493288916181154 0 1 0 16.62 0 a 8.31 2.493288916181154 0 1 0 -16.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.40 A 2 2 0 0 0 12.00 21.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.40 A 2 2 0 0 1 12.00 21.60"
      }
    ]
  ]
};

export const HibernoTalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.40 12.00 a 9.60 9.60 0 1 0 19.19 0 a 9.60 9.60 0 1 0 -19.19 0" />
      <path d="M 3.69 7.20 a 8.31 2.493288916181154 0 1 0 16.62 0 a 8.31 2.493288916181154 0 1 0 -16.62 0" />
      <path d="M 2.40 12.00 a 9.60 2.879002053849399 0 1 0 19.19 0 a 9.60 2.879002053849399 0 1 0 -19.19 0" />
      <path d="M 3.69 16.80 a 8.31 2.493288916181154 0 1 0 16.62 0 a 8.31 2.493288916181154 0 1 0 -16.62 0" />
      <path d="M 12.00 2.40 A 2 2 0 0 0 12.00 21.60" />
      <path d="M 12.00 2.40 A 2 2 0 0 1 12.00 21.60" />
      {children}
    </svg>
  );
});

export default HibernoTalk;
