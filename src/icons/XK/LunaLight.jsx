import React from 'react';

export const iconData = {
  "id": "LunaLight",
  "name": "LunaLight",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 2.38 C 16.60 14.57, 5.11 9.25, 19.27 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 9.90 6.48 C 19.30 16.96, 14.53 14.00, 15.47 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 8.19 C 7.00 14.17, 17.37 5.95, 19.75 17.83"
      }
    ],
    [
      "path",
      {
        "d": "M 9.34 4.55 C 9.19 10.24, 13.52 13.01, 19.38 15.25"
      }
    ]
  ]
};

export const LunaLight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 2.38 C 16.60 14.57, 5.11 9.25, 19.27 17.37" />
      <path d="M 9.90 6.48 C 19.30 16.96, 14.53 14.00, 15.47 19.79" />
      <path d="M 3.47 8.19 C 7.00 14.17, 17.37 5.95, 19.75 17.83" />
      <path d="M 9.34 4.55 C 9.19 10.24, 13.52 13.01, 19.38 15.25" />
      {children}
    </svg>
  );
});

export default LunaLight;
