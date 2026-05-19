import React from 'react';

export const iconData = {
  "id": "HorizoResource",
  "name": "HorizoResource",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 12.00 a 3.79 3.79 0 1 0 7.58 0 a 3.79 3.79 0 1 0 -7.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 12.00 a 5.67 5.67 0 1 0 11.33 0 a 5.67 5.67 0 1 0 -11.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 12.00 a 7.05 7.05 0 1 0 14.10 0 a 7.05 7.05 0 1 0 -14.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0"
      }
    ]
  ]
};

export const HorizoResource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0" />
      <path d="M 8.21 12.00 a 3.79 3.79 0 1 0 7.58 0 a 3.79 3.79 0 1 0 -7.58 0" />
      <path d="M 6.33 12.00 a 5.67 5.67 0 1 0 11.33 0 a 5.67 5.67 0 1 0 -11.33 0" />
      <path d="M 4.95 12.00 a 7.05 7.05 0 1 0 14.10 0 a 7.05 7.05 0 1 0 -14.10 0" />
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0" />
      {children}
    </svg>
  );
});

export default HorizoResource;
