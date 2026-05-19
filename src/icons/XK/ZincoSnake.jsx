import React from 'react';

export const iconData = {
  "id": "ZincoSnake",
  "name": "ZincoSnake",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.23 8.84 C 8.74 14.41, 10.74 19.00, 17.95 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 7.22 3.22 C 16.44 4.60, 14.36 5.24, 21.89 14.84"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 9.92 C 17.51 6.19, 15.97 16.75, 16.92 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 8.41 C 15.38 18.02, 10.66 13.25, 19.01 14.27"
      }
    ]
  ]
};

export const ZincoSnake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.23 8.84 C 8.74 14.41, 10.74 19.00, 17.95 20.22" />
      <path d="M 7.22 3.22 C 16.44 4.60, 14.36 5.24, 21.89 14.84" />
      <path d="M 4.19 9.92 C 17.51 6.19, 15.97 16.75, 16.92 16.01" />
      <path d="M 5.19 8.41 C 15.38 18.02, 10.66 13.25, 19.01 14.27" />
      {children}
    </svg>
  );
});

export default ZincoSnake;
