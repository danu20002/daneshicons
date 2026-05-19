import React from 'react';

export const iconData = {
  "id": "SolidoNoodle",
  "name": "SolidoNoodle",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 12.00 a 4.28 4.28 0 1 0 8.57 0 a 4.28 4.28 0 1 0 -8.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.52 12.00 a 6.48 6.48 0 1 0 12.95 0 a 6.48 6.48 0 1 0 -12.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0"
      }
    ]
  ]
};

export const SolidoNoodle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0" />
      <path d="M 7.72 12.00 a 4.28 4.28 0 1 0 8.57 0 a 4.28 4.28 0 1 0 -8.57 0" />
      <path d="M 5.52 12.00 a 6.48 6.48 0 1 0 12.95 0 a 6.48 6.48 0 1 0 -12.95 0" />
      <path d="M 3.84 12.00 a 8.16 8.16 0 1 0 16.32 0 a 8.16 8.16 0 1 0 -16.32 0" />
      {children}
    </svg>
  );
});

export default SolidoNoodle;
