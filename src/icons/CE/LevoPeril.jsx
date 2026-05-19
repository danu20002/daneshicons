import React from 'react';

export const iconData = {
  "id": "LevoPeril",
  "name": "LevoPeril",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 12.00 a 4.48 4.48 0 1 0 8.95 0 a 4.48 4.48 0 1 0 -8.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 12.00 a 6.13 6.13 0 1 0 12.26 0 a 6.13 6.13 0 1 0 -12.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 12.00 a 8.33 8.33 0 1 0 16.67 0 a 8.33 8.33 0 1 0 -16.67 0"
      }
    ]
  ]
};

export const LevoPeril = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0" />
      <path d="M 7.52 12.00 a 4.48 4.48 0 1 0 8.95 0 a 4.48 4.48 0 1 0 -8.95 0" />
      <path d="M 5.87 12.00 a 6.13 6.13 0 1 0 12.26 0 a 6.13 6.13 0 1 0 -12.26 0" />
      <path d="M 3.67 12.00 a 8.33 8.33 0 1 0 16.67 0 a 8.33 8.33 0 1 0 -16.67 0" />
      {children}
    </svg>
  );
});

export default LevoPeril;
