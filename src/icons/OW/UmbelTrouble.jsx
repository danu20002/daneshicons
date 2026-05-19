import React from 'react';

export const iconData = {
  "id": "UmbelTrouble",
  "name": "UmbelTrouble",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.23 12.34 L 11.66 21.23 L 2.77 11.66 L 12.34 2.77 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.00 14.24 L 9.76 18.00 L 6.00 9.76 L 14.24 6.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.54 14.27 L 9.73 14.54 L 9.46 9.73 L 14.27 9.46 Z"
      }
    ]
  ]
};

export const UmbelTrouble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.23 12.34 L 11.66 21.23 L 2.77 11.66 L 12.34 2.77 Z" />
      <path d="M 18.00 14.24 L 9.76 18.00 L 6.00 9.76 L 14.24 6.00 Z" />
      <path d="M 14.54 14.27 L 9.73 14.54 L 9.46 9.73 L 14.27 9.46 Z" />
      {children}
    </svg>
  );
});

export default UmbelTrouble;
