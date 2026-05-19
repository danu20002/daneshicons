import React from 'react';

export const iconData = {
  "id": "SanguiPuck",
  "name": "SanguiPuck",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.71 0 a 2.36 2.36 0 1 0 -4.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 12.00 a 4.00 4.00 0 1 0 8.00 0 a 4.00 4.00 0 1 0 -8.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 12.00 a 5.39 5.39 0 1 0 10.78 0 a 5.39 5.39 0 1 0 -10.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 12.00 a 6.88 6.88 0 1 0 13.76 0 a 6.88 6.88 0 1 0 -13.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0"
      }
    ]
  ]
};

export const SanguiPuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.71 0 a 2.36 2.36 0 1 0 -4.71 0" />
      <path d="M 8.00 12.00 a 4.00 4.00 0 1 0 8.00 0 a 4.00 4.00 0 1 0 -8.00 0" />
      <path d="M 6.61 12.00 a 5.39 5.39 0 1 0 10.78 0 a 5.39 5.39 0 1 0 -10.78 0" />
      <path d="M 5.12 12.00 a 6.88 6.88 0 1 0 13.76 0 a 6.88 6.88 0 1 0 -13.76 0" />
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0" />
      {children}
    </svg>
  );
});

export default SanguiPuck;
