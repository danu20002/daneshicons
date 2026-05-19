import React from 'react';

export const iconData = {
  "id": "CosmoMoor",
  "name": "CosmoMoor",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.76 15.32 A 4.64 5.54 174 0 0 13.58 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.36 18.92 L 3.74 5.53 L 4.92 11.28 L 4.80 14.45 L 14.35 2.09 L 8.82 17.15"
      }
    ],
    [
      "path",
      {
        "d": "M 2.98 7.84 L 10.31 14.21 L 14.15 12.29"
      }
    ],
    [
      "path",
      {
        "d": "M 18.25 15.38 A 6.30 4.05 46 0 1 20.61 11.19"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 15.09 L 2.11 7.31"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 18.74 C 14.70 19.51, 14.91 6.53, 16.73 13.96"
      }
    ]
  ]
};

export const CosmoMoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.76 15.32 A 4.64 5.54 174 0 0 13.58 19.79" />
      <path d="M 14.36 18.92 L 3.74 5.53 L 4.92 11.28 L 4.80 14.45 L 14.35 2.09 L 8.82 17.15" />
      <path d="M 2.98 7.84 L 10.31 14.21 L 14.15 12.29" />
      <path d="M 18.25 15.38 A 6.30 4.05 46 0 1 20.61 11.19" />
      <path d="M 3.05 15.09 L 2.11 7.31" />
      <path d="M 4.86 18.74 C 14.70 19.51, 14.91 6.53, 16.73 13.96" />
      {children}
    </svg>
  );
});

export default CosmoMoor;
