import React from 'react';

export const iconData = {
  "id": "VescicaFight",
  "name": "VescicaFight",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.55 12.00 L 19.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.55 L 12.00 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 6.79 L 17.21 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 17.21 L 17.21 6.79"
      }
    ],
    [
      "path",
      {
        "d": "M 2.21 12.00 a 9.79 9.79 0 1 0 19.57 0 a 9.79 9.79 0 1 0 -19.57 0"
      }
    ]
  ]
};

export const VescicaFight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.55 12.00 L 19.45 12.00" />
      <path d="M 12.00 4.55 L 12.00 19.45" />
      <path d="M 6.79 6.79 L 17.21 17.21" />
      <path d="M 6.79 17.21 L 17.21 6.79" />
      <path d="M 2.21 12.00 a 9.79 9.79 0 1 0 19.57 0 a 9.79 9.79 0 1 0 -19.57 0" />
      {children}
    </svg>
  );
});

export default VescicaFight;
