import React from 'react';

export const iconData = {
  "id": "CosmoPurpose",
  "name": "CosmoPurpose",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.87 21.37 A 6.98 4.89 11 0 1 20.35 7.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 18.59 A 3.43 3.51 130 0 1 4.35 12.24"
      }
    ]
  ]
};

export const CosmoPurpose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.87 21.37 A 6.98 4.89 11 0 1 20.35 7.71" />
      <path d="M 6.98 18.59 A 3.43 3.51 130 0 1 4.35 12.24" />
      {children}
    </svg>
  );
});

export default CosmoPurpose;
