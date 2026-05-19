import React from 'react';

export const iconData = {
  "id": "PhiloKoi",
  "name": "PhiloKoi",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 12.00 L 16.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 L 11.72 9.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 L 11.72 14.42"
      }
    ]
  ]
};

export const PhiloKoi = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 12.00 L 16.31 12.00" />
      <path d="M 7.69 12.00 L 11.72 9.58" />
      <path d="M 7.69 12.00 L 11.72 14.42" />
      {children}
    </svg>
  );
});

export default PhiloKoi;
