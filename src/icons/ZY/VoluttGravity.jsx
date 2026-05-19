import React from 'react';

export const iconData = {
  "id": "VoluttGravity",
  "name": "VoluttGravity",
  "category": "ZY",
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
        "d": "M 5.17 6.87 a 6.83 2.0502780531719327 0 1 0 13.67 0 a 6.83 2.0502780531719327 0 1 0 -13.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 10.29 a 8.37 2.5110675305490564 0 1 0 16.74 0 a 8.37 2.5110675305490564 0 1 0 -16.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 13.71 a 8.37 2.5110675305490564 0 1 0 16.74 0 a 8.37 2.5110675305490564 0 1 0 -16.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.17 17.13 a 6.83 2.0502780531719327 0 1 0 13.67 0 a 6.83 2.0502780531719327 0 1 0 -13.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.46 A 2 2 0 0 0 12.00 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.46 A 2 2 0 0 1 12.00 20.54"
      }
    ]
  ]
};

export const VoluttGravity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.17 6.87 a 6.83 2.0502780531719327 0 1 0 13.67 0 a 6.83 2.0502780531719327 0 1 0 -13.67 0" />
      <path d="M 3.63 10.29 a 8.37 2.5110675305490564 0 1 0 16.74 0 a 8.37 2.5110675305490564 0 1 0 -16.74 0" />
      <path d="M 3.63 13.71 a 8.37 2.5110675305490564 0 1 0 16.74 0 a 8.37 2.5110675305490564 0 1 0 -16.74 0" />
      <path d="M 5.17 17.13 a 6.83 2.0502780531719327 0 1 0 13.67 0 a 6.83 2.0502780531719327 0 1 0 -13.67 0" />
      <path d="M 12.00 3.46 A 2 2 0 0 0 12.00 20.54" />
      <path d="M 12.00 3.46 A 2 2 0 0 1 12.00 20.54" />
      {children}
    </svg>
  );
});

export default VoluttGravity;
