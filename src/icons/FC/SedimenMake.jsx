import React from 'react';

export const iconData = {
  "id": "SedimenMake",
  "name": "SedimenMake",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 12.00 a 2.00 2.00 0 1 0 4.00 0 a 2.00 2.00 0 1 0 -4.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 12.00 a 4.20 4.20 0 1 0 8.41 0 a 4.20 4.20 0 1 0 -8.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 0 12.14 0 a 6.07 6.07 0 1 0 -12.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0"
      }
    ]
  ]
};

export const SedimenMake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 12.00 a 2.00 2.00 0 1 0 4.00 0 a 2.00 2.00 0 1 0 -4.00 0" />
      <path d="M 7.80 12.00 a 4.20 4.20 0 1 0 8.41 0 a 4.20 4.20 0 1 0 -8.41 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 0 12.14 0 a 6.07 6.07 0 1 0 -12.14 0" />
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0" />
      {children}
    </svg>
  );
});

export default SedimenMake;
