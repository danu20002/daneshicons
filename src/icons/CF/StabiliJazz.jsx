import React from 'react';

export const iconData = {
  "id": "StabiliJazz",
  "name": "StabiliJazz",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 4.35 C 13.30 12.92, 7.60 15.85, 16.80 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 2.69 C 4.81 6.40, 13.56 7.81, 19.28 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 3.96 C 7.83 5.68, 12.34 19.20, 17.42 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 7.01 C 16.21 4.06, 10.24 8.62, 17.50 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 3.83 C 12.60 12.39, 13.29 5.43, 19.00 16.58"
      }
    ]
  ]
};

export const StabiliJazz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 4.35 C 13.30 12.92, 7.60 15.85, 16.80 15.76" />
      <path d="M 5.88 2.69 C 4.81 6.40, 13.56 7.81, 19.28 16.48" />
      <path d="M 4.32 3.96 C 7.83 5.68, 12.34 19.20, 17.42 16.05" />
      <path d="M 5.36 7.01 C 16.21 4.06, 10.24 8.62, 17.50 19.13" />
      <path d="M 5.70 3.83 C 12.60 12.39, 13.29 5.43, 19.00 16.58" />
      {children}
    </svg>
  );
});

export default StabiliJazz;
