import React from 'react';

export const iconData = {
  "id": "CryoElegance",
  "name": "CryoElegance",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.83 12.00 a 4.17 4.17 0 1 0 8.33 0 a 4.17 4.17 0 1 0 -8.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 12.00 a 6.31 6.31 0 1 0 12.62 0 a 6.31 6.31 0 1 0 -12.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.94 0 a 8.47 8.47 0 1 0 -16.94 0"
      }
    ]
  ]
};

export const CryoElegance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0" />
      <path d="M 7.83 12.00 a 4.17 4.17 0 1 0 8.33 0 a 4.17 4.17 0 1 0 -8.33 0" />
      <path d="M 5.69 12.00 a 6.31 6.31 0 1 0 12.62 0 a 6.31 6.31 0 1 0 -12.62 0" />
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.94 0 a 8.47 8.47 0 1 0 -16.94 0" />
      {children}
    </svg>
  );
});

export default CryoElegance;
