import React from 'react';

export const iconData = {
  "id": "PantoCaster",
  "name": "PantoCaster",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.76 7.65 C 6.27 18.20, 4.45 12.95, 16.97 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 5.68 C 6.25 10.67, 16.06 6.73, 14.38 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 5.72 C 13.32 4.80, 16.12 6.60, 19.32 15.88"
      }
    ]
  ]
};

export const PantoCaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.76 7.65 C 6.27 18.20, 4.45 12.95, 16.97 18.67" />
      <path d="M 8.30 5.68 C 6.25 10.67, 16.06 6.73, 14.38 20.93" />
      <path d="M 5.79 5.72 C 13.32 4.80, 16.12 6.60, 19.32 15.88" />
      {children}
    </svg>
  );
});

export default PantoCaster;
