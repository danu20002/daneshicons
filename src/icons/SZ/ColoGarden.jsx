import React from 'react';

export const iconData = {
  "id": "ColoGarden",
  "name": "ColoGarden",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 12.00 a 5.02 5.02 0 1 0 10.05 0 a 5.02 5.02 0 1 0 -10.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 12.00 a 7.55 7.55 0 1 0 15.11 0 a 7.55 7.55 0 1 0 -15.11 0"
      }
    ]
  ]
};

export const ColoGarden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0" />
      <path d="M 6.98 12.00 a 5.02 5.02 0 1 0 10.05 0 a 5.02 5.02 0 1 0 -10.05 0" />
      <path d="M 4.45 12.00 a 7.55 7.55 0 1 0 15.11 0 a 7.55 7.55 0 1 0 -15.11 0" />
      {children}
    </svg>
  );
});

export default ColoGarden;
