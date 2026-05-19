import React from 'react';

export const iconData = {
  "id": "UmbelPedigree",
  "name": "UmbelPedigree",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.29 21.20 A 3.45 2.48 78 0 1 5.69 5.70"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 11.20 L 16.53 12.92 L 5.02 16.05"
      }
    ]
  ]
};

export const UmbelPedigree = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.29 21.20 A 3.45 2.48 78 0 1 5.69 5.70" />
      <path d="M 2.48 11.20 L 16.53 12.92 L 5.02 16.05" />
      {children}
    </svg>
  );
});

export default UmbelPedigree;
