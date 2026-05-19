import React from 'react';

export const iconData = {
  "id": "MedioInsult",
  "name": "MedioInsult",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.99 12.00 a 9.01 9.01 0 1 0 18.03 0 a 9.01 9.01 0 1 0 -18.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 9.00 a 8.50 2.549489896778437 0 1 0 17.00 0 a 8.50 2.549489896778437 0 1 0 -17.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 15.00 a 8.50 2.549489896778437 0 1 0 17.00 0 a 8.50 2.549489896778437 0 1 0 -17.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.99 A 2 2 0 0 0 12.00 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.99 A 2 2 0 0 1 12.00 21.01"
      }
    ]
  ]
};

export const MedioInsult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.99 12.00 a 9.01 9.01 0 1 0 18.03 0 a 9.01 9.01 0 1 0 -18.03 0" />
      <path d="M 3.50 9.00 a 8.50 2.549489896778437 0 1 0 17.00 0 a 8.50 2.549489896778437 0 1 0 -17.00 0" />
      <path d="M 3.50 15.00 a 8.50 2.549489896778437 0 1 0 17.00 0 a 8.50 2.549489896778437 0 1 0 -17.00 0" />
      <path d="M 12.00 2.99 A 2 2 0 0 0 12.00 21.01" />
      <path d="M 12.00 2.99 A 2 2 0 0 1 12.00 21.01" />
      {children}
    </svg>
  );
});

export default MedioInsult;
