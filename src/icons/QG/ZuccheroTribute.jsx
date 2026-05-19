import React from 'react';

export const iconData = {
  "id": "ZuccheroTribute",
  "name": "ZuccheroTribute",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 12.00 L 20.41 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.59 L 12.00 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 2.30 12.00 a 9.70 9.70 0 1 0 19.41 0 a 9.70 9.70 0 1 0 -19.41 0"
      }
    ]
  ]
};

export const ZuccheroTribute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 12.00 L 20.41 12.00" />
      <path d="M 12.00 3.59 L 12.00 20.41" />
      <path d="M 2.30 12.00 a 9.70 9.70 0 1 0 19.41 0 a 9.70 9.70 0 1 0 -19.41 0" />
      {children}
    </svg>
  );
});

export default ZuccheroTribute;
