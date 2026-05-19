import React from 'react';

export const iconData = {
  "id": "EquiRibbon",
  "name": "EquiRibbon",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 12.00 a 4.05 4.05 0 1 1 8.09 0 a 4.05 4.05 0 1 1 -8.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 12.00 L 20.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 16.18 L 18.51 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 18.40 L 13.48 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 17.63 L 7.75 19.36"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 14.22 L 4.01 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 9.78 L 4.01 9.09"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 6.37 L 7.75 4.64"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 5.60 L 13.48 3.63"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 7.82 L 18.51 6.53"
      }
    ]
  ]
};

export const EquiRibbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.00 12.00 a 7.00 7.00 0 1 0 14.01 0 a 7.00 7.00 0 1 0 -14.01 0" />
      <path d="M 7.95 12.00 a 4.05 4.05 0 1 1 8.09 0 a 4.05 4.05 0 1 1 -8.09 0" />
      <path d="M 18.50 12.00 L 20.50 12.00" />
      <path d="M 16.98 16.18 L 18.51 17.47" />
      <path d="M 13.13 18.40 L 13.48 20.37" />
      <path d="M 8.75 17.63 L 7.75 19.36" />
      <path d="M 5.89 14.22 L 4.01 14.91" />
      <path d="M 5.89 9.78 L 4.01 9.09" />
      <path d="M 8.75 6.37 L 7.75 4.64" />
      <path d="M 13.13 5.60 L 13.48 3.63" />
      <path d="M 16.98 7.82 L 18.51 6.53" />
      {children}
    </svg>
  );
});

export default EquiRibbon;
