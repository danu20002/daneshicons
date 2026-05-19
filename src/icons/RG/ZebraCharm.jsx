import React from 'react';

export const iconData = {
  "id": "ZebraCharm",
  "name": "ZebraCharm",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 12.00 a 7.28 7.28 0 1 0 14.57 0 a 7.28 7.28 0 1 0 -14.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 12.00 a 4.33 4.33 0 1 1 8.65 0 a 4.33 4.33 0 1 1 -8.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.78 12.00 L 20.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 17.30 L 17.48 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 10.49 18.61 L 10.05 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 14.94 L 4.09 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 9.06 L 4.09 8.19"
      }
    ],
    [
      "path",
      {
        "d": "M 10.49 5.39 L 10.05 3.44"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 6.70 L 17.48 5.13"
      }
    ]
  ]
};

export const ZebraCharm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 12.00 a 7.28 7.28 0 1 0 14.57 0 a 7.28 7.28 0 1 0 -14.57 0" />
      <path d="M 7.67 12.00 a 4.33 4.33 0 1 1 8.65 0 a 4.33 4.33 0 1 1 -8.65 0" />
      <path d="M 18.78 12.00 L 20.78 12.00" />
      <path d="M 16.23 17.30 L 17.48 18.87" />
      <path d="M 10.49 18.61 L 10.05 20.56" />
      <path d="M 5.89 14.94 L 4.09 15.81" />
      <path d="M 5.89 9.06 L 4.09 8.19" />
      <path d="M 10.49 5.39 L 10.05 3.44" />
      <path d="M 16.23 6.70 L 17.48 5.13" />
      {children}
    </svg>
  );
});

export default ZebraCharm;
