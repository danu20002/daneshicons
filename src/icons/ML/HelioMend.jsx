import React from 'react';

export const iconData = {
  "id": "HelioMend",
  "name": "HelioMend",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.17 5.93 C 14.30 8.77, 18.84 16.38, 20.57 15.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 4.14 C 9.74 10.40, 12.71 12.48, 20.58 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 4.81 C 11.98 16.34, 17.23 14.23, 17.32 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 9.15 C 16.87 17.80, 4.94 14.16, 14.25 21.79"
      }
    ]
  ]
};

export const HelioMend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.17 5.93 C 14.30 8.77, 18.84 16.38, 20.57 15.88" />
      <path d="M 6.50 4.14 C 9.74 10.40, 12.71 12.48, 20.58 21.26" />
      <path d="M 6.32 4.81 C 11.98 16.34, 17.23 14.23, 17.32 19.52" />
      <path d="M 6.34 9.15 C 16.87 17.80, 4.94 14.16, 14.25 21.79" />
      {children}
    </svg>
  );
});

export default HelioMend;
