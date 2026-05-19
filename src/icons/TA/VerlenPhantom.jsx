import React from 'react';

export const iconData = {
  "id": "VerlenPhantom",
  "name": "VerlenPhantom",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.68 3.04 C 10.61 15.12, 15.63 11.72, 15.13 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 9.27 C 9.05 6.06, 7.65 13.45, 19.69 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 7.22 C 12.50 14.93, 7.55 17.67, 15.60 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 3.44 C 19.77 13.32, 5.05 10.58, 18.47 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 4.83 C 17.56 14.50, 4.18 12.87, 18.73 21.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.55 4.73 C 13.59 5.98, 4.16 4.48, 16.63 18.90"
      }
    ]
  ]
};

export const VerlenPhantom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.68 3.04 C 10.61 15.12, 15.63 11.72, 15.13 21.30" />
      <path d="M 9.14 9.27 C 9.05 6.06, 7.65 13.45, 19.69 19.53" />
      <path d="M 6.61 7.22 C 12.50 14.93, 7.55 17.67, 15.60 20.37" />
      <path d="M 4.61 3.44 C 19.77 13.32, 5.05 10.58, 18.47 17.21" />
      <path d="M 5.57 4.83 C 17.56 14.50, 4.18 12.87, 18.73 21.52" />
      <path d="M 9.55 4.73 C 13.59 5.98, 4.16 4.48, 16.63 18.90" />
      {children}
    </svg>
  );
});

export default VerlenPhantom;
