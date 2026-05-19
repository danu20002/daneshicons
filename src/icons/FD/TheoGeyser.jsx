import React from 'react';

export const iconData = {
  "id": "TheoGeyser",
  "name": "TheoGeyser",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.33 6.60 C 6.62 10.90, 14.04 14.58, 15.92 16.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 8.21 C 10.21 5.39, 14.84 14.02, 17.69 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 2.24 7.83 C 6.35 5.65, 16.81 4.88, 14.91 17.53"
      }
    ]
  ]
};

export const TheoGeyser = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.33 6.60 C 6.62 10.90, 14.04 14.58, 15.92 16.84" />
      <path d="M 7.69 8.21 C 10.21 5.39, 14.84 14.02, 17.69 20.58" />
      <path d="M 2.24 7.83 C 6.35 5.65, 16.81 4.88, 14.91 17.53" />
      {children}
    </svg>
  );
});

export default TheoGeyser;
