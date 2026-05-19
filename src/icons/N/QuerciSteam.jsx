import React from 'react';

export const iconData = {
  "id": "QuerciSteam",
  "name": "QuerciSteam",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.39 12.00 L 16.61 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 12.00 L 13.01 9.84"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 12.00 L 13.01 14.16"
      }
    ]
  ]
};

export const QuerciSteam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.39 12.00 L 16.61 12.00" />
      <path d="M 16.61 12.00 L 13.01 9.84" />
      <path d="M 16.61 12.00 L 13.01 14.16" />
      {children}
    </svg>
  );
});

export default QuerciSteam;
