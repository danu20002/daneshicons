import React from 'react';

export const iconData = {
  "id": "VagaSync",
  "name": "VagaSync",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.20 2.65 C 19.23 6.31, 6.70 16.12, 18.56 15.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 3.26 C 14.21 16.21, 14.10 19.49, 20.42 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 4.86 C 18.05 19.09, 14.30 10.84, 20.91 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 7.34 C 12.07 15.73, 4.63 18.15, 21.03 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 6.62 C 13.86 14.00, 12.69 12.93, 17.10 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 6.87 C 4.30 19.10, 16.64 11.33, 19.98 20.74"
      }
    ]
  ]
};

export const VagaSync = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.20 2.65 C 19.23 6.31, 6.70 16.12, 18.56 15.99" />
      <path d="M 9.87 3.26 C 14.21 16.21, 14.10 19.49, 20.42 18.84" />
      <path d="M 5.61 4.86 C 18.05 19.09, 14.30 10.84, 20.91 18.92" />
      <path d="M 3.51 7.34 C 12.07 15.73, 4.63 18.15, 21.03 18.33" />
      <path d="M 4.74 6.62 C 13.86 14.00, 12.69 12.93, 17.10 18.45" />
      <path d="M 7.97 6.87 C 4.30 19.10, 16.64 11.33, 19.98 20.74" />
      {children}
    </svg>
  );
});

export default VagaSync;
