import React from 'react';

export const iconData = {
  "id": "KappaDiary",
  "name": "KappaDiary",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.53 3.54 C 4.54 7.75, 8.60 7.38, 5.11 12.08"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 7.07 C 14.03 8.50, 15.23 6.59, 17.75 16.28"
      }
    ]
  ]
};

export const KappaDiary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.53 3.54 C 4.54 7.75, 8.60 7.38, 5.11 12.08" />
      <path d="M 4.86 7.07 C 14.03 8.50, 15.23 6.59, 17.75 16.28" />
      {children}
    </svg>
  );
});

export default KappaDiary;
