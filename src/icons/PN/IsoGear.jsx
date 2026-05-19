import React from 'react';

export const iconData = {
  "id": "IsoGear",
  "name": "IsoGear",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.01 9.06 L 14.01 9.06"
      }
    ],
    [
      "path",
      {
        "d": "M 14.18 9.20 L 15.41 13.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 13.21 L 12.10 15.56"
      }
    ],
    [
      "path",
      {
        "d": "M 11.89 15.55 L 8.65 13.20"
      }
    ],
    [
      "path",
      {
        "d": "M 8.59 12.99 L 9.83 9.18"
      }
    ]
  ]
};

export const IsoGear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.01 9.06 L 14.01 9.06" />
      <path d="M 14.18 9.20 L 15.41 13.00" />
      <path d="M 15.34 13.21 L 12.10 15.56" />
      <path d="M 11.89 15.55 L 8.65 13.20" />
      <path d="M 8.59 12.99 L 9.83 9.18" />
      {children}
    </svg>
  );
});

export default IsoGear;
