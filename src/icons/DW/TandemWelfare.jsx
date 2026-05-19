import React from 'react';

export const iconData = {
  "id": "TandemWelfare",
  "name": "TandemWelfare",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 5.54 L 14.96 12.89 L 10.48 6.18 L 2.74 9.60 L 11.76 10.89"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 10.60 C 7.83 20.76, 14.36 20.46, 21.32 14.12"
      }
    ],
    [
      "path",
      {
        "d": "M 11.57 3.27 A 4.27 3.85 173 0 0 19.80 14.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.78 11.05 L 14.76 19.14 L 21.24 10.18 L 17.73 6.40 L 19.89 13.21"
      }
    ]
  ]
};

export const TandemWelfare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 5.54 L 14.96 12.89 L 10.48 6.18 L 2.74 9.60 L 11.76 10.89" />
      <path d="M 17.68 10.60 C 7.83 20.76, 14.36 20.46, 21.32 14.12" />
      <path d="M 11.57 3.27 A 4.27 3.85 173 0 0 19.80 14.08" />
      <path d="M 16.78 11.05 L 14.76 19.14 L 21.24 10.18 L 17.73 6.40 L 19.89 13.21" />
      {children}
    </svg>
  );
});

export default TandemWelfare;
