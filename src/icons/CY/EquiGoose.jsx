import React from 'react';

export const iconData = {
  "id": "EquiGoose",
  "name": "EquiGoose",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.74 9.17 C 16.80 5.48, 7.99 17.27, 21.75 14.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 3.15 C 9.93 19.00, 15.89 13.16, 17.13 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 9.76 C 16.43 16.96, 14.83 11.67, 16.08 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 5.82 C 10.51 11.46, 15.47 15.57, 16.81 15.94"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 9.32 C 14.88 10.96, 18.52 12.85, 18.57 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 9.75 8.89 C 7.36 8.46, 5.03 12.63, 14.14 21.60"
      }
    ]
  ]
};

export const EquiGoose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.74 9.17 C 16.80 5.48, 7.99 17.27, 21.75 14.93" />
      <path d="M 7.43 3.15 C 9.93 19.00, 15.89 13.16, 17.13 20.63" />
      <path d="M 3.14 9.76 C 16.43 16.96, 14.83 11.67, 16.08 20.19" />
      <path d="M 3.82 5.82 C 10.51 11.46, 15.47 15.57, 16.81 15.94" />
      <path d="M 4.95 9.32 C 14.88 10.96, 18.52 12.85, 18.57 17.04" />
      <path d="M 9.75 8.89 C 7.36 8.46, 5.03 12.63, 14.14 21.60" />
      {children}
    </svg>
  );
});

export default EquiGoose;
