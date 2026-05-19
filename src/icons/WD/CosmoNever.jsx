import React from 'react';

export const iconData = {
  "id": "CosmoNever",
  "name": "CosmoNever",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.54 8.30 A 2.28 3.81 15 0 0 5.55 13.46"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 7.38 L 19.13 6.23 L 21.63 6.77 L 3.83 15.86 L 3.90 15.65 L 14.33 10.95"
      }
    ]
  ]
};

export const CosmoNever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.54 8.30 A 2.28 3.81 15 0 0 5.55 13.46" />
      <path d="M 18.85 7.38 L 19.13 6.23 L 21.63 6.77 L 3.83 15.86 L 3.90 15.65 L 14.33 10.95" />
      {children}
    </svg>
  );
});

export default CosmoNever;
