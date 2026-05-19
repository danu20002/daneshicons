import React from 'react';

export const iconData = {
  "id": "ZebraTaxi",
  "name": "ZebraTaxi",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.51 12.00 L 16.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 12.00 L 12.60 9.67"
      }
    ],
    [
      "path",
      {
        "d": "M 16.49 12.00 L 12.60 14.33"
      }
    ]
  ]
};

export const ZebraTaxi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.51 12.00 L 16.49 12.00" />
      <path d="M 16.49 12.00 L 12.60 9.67" />
      <path d="M 16.49 12.00 L 12.60 14.33" />
      {children}
    </svg>
  );
});

export default ZebraTaxi;
