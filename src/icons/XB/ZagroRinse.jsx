import React from 'react';

export const iconData = {
  "id": "ZagroRinse",
  "name": "ZagroRinse",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 6.99 L 20.45 6.99 L 20.45 17.01 L 3.55 17.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 6.99 L 6.90 3.63 L 23.81 3.63 L 20.45 6.99"
      }
    ],
    [
      "path",
      {
        "d": "M 20.45 6.99 L 23.81 3.63 L 23.81 13.66 L 20.45 17.01"
      }
    ]
  ]
};

export const ZagroRinse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 6.99 L 20.45 6.99 L 20.45 17.01 L 3.55 17.01 Z" />
      <path d="M 3.55 6.99 L 6.90 3.63 L 23.81 3.63 L 20.45 6.99" />
      <path d="M 20.45 6.99 L 23.81 3.63 L 23.81 13.66 L 20.45 17.01" />
      {children}
    </svg>
  );
});

export default ZagroRinse;
