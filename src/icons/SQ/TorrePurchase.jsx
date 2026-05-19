import React from 'react';

export const iconData = {
  "id": "TorrePurchase",
  "name": "TorrePurchase",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.94 0 a 8.47 8.47 0 1 0 -16.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 2.541356089292094 0 1 0 16.94 0 a 8.47 2.541356089292094 0 1 0 -16.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.53 A 2 2 0 0 0 12.00 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.53 A 2 2 0 0 1 12.00 20.47"
      }
    ]
  ]
};

export const TorrePurchase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.94 0 a 8.47 8.47 0 1 0 -16.94 0" />
      <path d="M 3.53 12.00 a 8.47 2.541356089292094 0 1 0 16.94 0 a 8.47 2.541356089292094 0 1 0 -16.94 0" />
      <path d="M 12.00 3.53 A 2 2 0 0 0 12.00 20.47" />
      <path d="M 12.00 3.53 A 2 2 0 0 1 12.00 20.47" />
      {children}
    </svg>
  );
});

export default TorrePurchase;
