import React from 'react';

export const iconData = {
  "id": "VegetoWield",
  "name": "VegetoWield",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.09 0 a 8.54 8.54 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 2.563333962718025 0 1 0 17.09 0 a 8.54 2.563333962718025 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.60 A 2 2 0 0 0 16.27 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.60 A 2 2 0 0 1 16.27 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.60 A 2 2 0 0 0 7.73 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.60 A 2 2 0 0 1 7.73 19.40"
      }
    ]
  ]
};

export const VegetoWield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.09 0 a 8.54 8.54 0 1 0 -17.09 0" />
      <path d="M 3.46 12.00 a 8.54 2.563333962718025 0 1 0 17.09 0 a 8.54 2.563333962718025 0 1 0 -17.09 0" />
      <path d="M 16.27 4.60 A 2 2 0 0 0 16.27 19.40" />
      <path d="M 16.27 4.60 A 2 2 0 0 1 16.27 19.40" />
      <path d="M 7.73 4.60 A 2 2 0 0 0 7.73 19.40" />
      <path d="M 7.73 4.60 A 2 2 0 0 1 7.73 19.40" />
      {children}
    </svg>
  );
});

export default VegetoWield;
