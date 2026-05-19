import React from 'react';

export const iconData = {
  "id": "LunaOre",
  "name": "LunaOre",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.94 12.00 a 2.06 2.06 0 1 0 4.11 0 a 2.06 2.06 0 1 0 -4.11 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 12.00 a 5.11 5.11 0 1 0 10.21 0 a 5.11 5.11 0 1 0 -10.21 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0",
        "stroke-dasharray": "2 3"
      }
    ]
  ]
};

export const LunaOre = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.94 12.00 a 2.06 2.06 0 1 0 4.11 0 a 2.06 2.06 0 1 0 -4.11 0" stroke-dasharray="4 3" />
      <path d="M 6.89 12.00 a 5.11 5.11 0 1 0 10.21 0 a 5.11 5.11 0 1 0 -10.21 0" stroke-dasharray="3 3" />
      <path d="M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0" stroke-dasharray="2 3" />
      {children}
    </svg>
  );
});

export default LunaOre;
