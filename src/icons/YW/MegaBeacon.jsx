import React from 'react';

export const iconData = {
  "id": "MegaBeacon",
  "name": "MegaBeacon",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 4.20 C 19.16 4.02, 6.13 17.87, 18.06 17.44"
      }
    ],
    [
      "path",
      {
        "d": "M 8.90 4.42 C 11.67 9.20, 15.39 16.85, 17.68 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 5.96 C 16.28 14.94, 15.66 7.60, 20.81 15.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 2.73 C 16.93 11.59, 19.08 17.83, 16.81 21.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 6.77 C 18.53 8.83, 6.85 4.17, 15.31 21.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 2.05 C 15.19 15.30, 9.47 13.43, 18.87 21.36"
      }
    ]
  ]
};

export const MegaBeacon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 4.20 C 19.16 4.02, 6.13 17.87, 18.06 17.44" />
      <path d="M 8.90 4.42 C 11.67 9.20, 15.39 16.85, 17.68 14.57" />
      <path d="M 3.26 5.96 C 16.28 14.94, 15.66 7.60, 20.81 15.91" />
      <path d="M 5.87 2.73 C 16.93 11.59, 19.08 17.83, 16.81 21.63" />
      <path d="M 5.71 6.77 C 18.53 8.83, 6.85 4.17, 15.31 21.31" />
      <path d="M 6.60 2.05 C 15.19 15.30, 9.47 13.43, 18.87 21.36" />
      {children}
    </svg>
  );
});

export default MegaBeacon;
