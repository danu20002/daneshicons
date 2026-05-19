import React from 'react';

export const iconData = {
  "id": "MechaTomato",
  "name": "MechaTomato",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 12.00 a 5.06 5.06 0 1 0 10.12 0 a 5.06 5.06 0 1 0 -10.12 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.65 0 a 7.83 7.83 0 1 0 -15.65 0"
      }
    ]
  ]
};

export const MechaTomato = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0" />
      <path d="M 6.94 12.00 a 5.06 5.06 0 1 0 10.12 0 a 5.06 5.06 0 1 0 -10.12 0" stroke-dasharray="4 1" />
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.65 0 a 7.83 7.83 0 1 0 -15.65 0" />
      {children}
    </svg>
  );
});

export default MechaTomato;
