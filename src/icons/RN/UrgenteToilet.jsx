import React from 'react';

export const iconData = {
  "id": "UrgenteToilet",
  "name": "UrgenteToilet",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.73 12.00 a 2.27 2.27 0 1 0 4.53 0 a 2.27 2.27 0 1 0 -4.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 12.00 a 4.83 4.83 0 1 0 9.67 0 a 4.83 4.83 0 1 0 -9.67 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0"
      }
    ]
  ]
};

export const UrgenteToilet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.73 12.00 a 2.27 2.27 0 1 0 4.53 0 a 2.27 2.27 0 1 0 -4.53 0" />
      <path d="M 7.17 12.00 a 4.83 4.83 0 1 0 9.67 0 a 4.83 4.83 0 1 0 -9.67 0" stroke-dasharray="4 2" />
      <path d="M 4.51 12.00 a 7.49 7.49 0 1 0 14.98 0 a 7.49 7.49 0 1 0 -14.98 0" />
      {children}
    </svg>
  );
});

export default UrgenteToilet;
