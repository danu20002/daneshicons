import React from 'react';

export const iconData = {
  "id": "DimenZigzag",
  "name": "DimenZigzag",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.53 6.24 C 16.21 14.23, 8.03 15.10, 15.80 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 7.26 C 7.60 18.12, 4.60 9.51, 14.80 14.77"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 3.18 C 15.99 14.38, 6.40 11.32, 15.42 18.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 5.76 C 9.50 13.89, 8.93 18.07, 17.46 21.15"
      }
    ]
  ]
};

export const DimenZigzag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.53 6.24 C 16.21 14.23, 8.03 15.10, 15.80 14.57" />
      <path d="M 5.97 7.26 C 7.60 18.12, 4.60 9.51, 14.80 14.77" />
      <path d="M 3.84 3.18 C 15.99 14.38, 6.40 11.32, 15.42 18.12" />
      <path d="M 7.91 5.76 C 9.50 13.89, 8.93 18.07, 17.46 21.15" />
      {children}
    </svg>
  );
});

export default DimenZigzag;
