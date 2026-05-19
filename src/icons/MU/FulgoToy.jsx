import React from 'react';

export const iconData = {
  "id": "FulgoToy",
  "name": "FulgoToy",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 8.17 0 1 0 16.35 0 a 8.17 8.17 0 1 0 -16.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 2.4522946843877436 0 1 0 16.35 0 a 8.17 2.4522946843877436 0 1 0 -16.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.83 A 2 2 0 0 0 12.00 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.83 A 2 2 0 0 1 12.00 20.17"
      }
    ]
  ]
};

export const FulgoToy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 12.00 a 8.17 8.17 0 1 0 16.35 0 a 8.17 8.17 0 1 0 -16.35 0" />
      <path d="M 3.83 12.00 a 8.17 2.4522946843877436 0 1 0 16.35 0 a 8.17 2.4522946843877436 0 1 0 -16.35 0" />
      <path d="M 12.00 3.83 A 2 2 0 0 0 12.00 20.17" />
      <path d="M 12.00 3.83 A 2 2 0 0 1 12.00 20.17" />
      {children}
    </svg>
  );
});

export default FulgoToy;
