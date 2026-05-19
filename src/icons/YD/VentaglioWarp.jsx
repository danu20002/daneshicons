import React from 'react';

export const iconData = {
  "id": "VentaglioWarp",
  "name": "VentaglioWarp",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 7.45 C 18.42 9.18, 19.12 12.72, 15.17 15.18"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 4.23 C 12.10 12.18, 6.45 8.92, 18.15 18.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.92 6.06 C 14.69 9.92, 4.31 11.22, 18.38 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 3.55 C 11.85 12.37, 17.51 4.06, 20.03 16.27"
      }
    ]
  ]
};

export const VentaglioWarp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 7.45 C 18.42 9.18, 19.12 12.72, 15.17 15.18" />
      <path d="M 3.97 4.23 C 12.10 12.18, 6.45 8.92, 18.15 18.14" />
      <path d="M 8.92 6.06 C 14.69 9.92, 4.31 11.22, 18.38 14.87" />
      <path d="M 7.66 3.55 C 11.85 12.37, 17.51 4.06, 20.03 16.27" />
      {children}
    </svg>
  );
});

export default VentaglioWarp;
