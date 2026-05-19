import React from 'react';

export const iconData = {
  "id": "FumoLoaf",
  "name": "FumoLoaf",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 10.79 L 10.72 10.79"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 6.72 L 13.21 10.72"
      }
    ],
    [
      "path",
      {
        "d": "M 17.28 13.21 L 13.28 13.21"
      }
    ],
    [
      "path",
      {
        "d": "M 10.79 17.28 L 10.79 13.28"
      }
    ]
  ]
};

export const FumoLoaf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 10.79 L 10.72 10.79" />
      <path d="M 13.21 6.72 L 13.21 10.72" />
      <path d="M 17.28 13.21 L 13.28 13.21" />
      <path d="M 10.79 17.28 L 10.79 13.28" />
      {children}
    </svg>
  );
});

export default FumoLoaf;
