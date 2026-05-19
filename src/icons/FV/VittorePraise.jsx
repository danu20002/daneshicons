import React from 'react';

export const iconData = {
  "id": "VittorePraise",
  "name": "VittorePraise",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.44 0 a 2.22 2.22 0 1 0 -4.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 12.00 a 4.07 4.07 0 1 0 8.15 0 a 4.07 4.07 0 1 0 -8.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 12.00 a 5.47 5.47 0 1 0 10.94 0 a 5.47 5.47 0 1 0 -10.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 12.00 a 6.87 6.87 0 1 0 13.73 0 a 6.87 6.87 0 1 0 -13.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0"
      }
    ]
  ]
};

export const VittorePraise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.44 0 a 2.22 2.22 0 1 0 -4.44 0" />
      <path d="M 7.93 12.00 a 4.07 4.07 0 1 0 8.15 0 a 4.07 4.07 0 1 0 -8.15 0" />
      <path d="M 6.53 12.00 a 5.47 5.47 0 1 0 10.94 0 a 5.47 5.47 0 1 0 -10.94 0" />
      <path d="M 5.13 12.00 a 6.87 6.87 0 1 0 13.73 0 a 6.87 6.87 0 1 0 -13.73 0" />
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0" />
      {children}
    </svg>
  );
});

export default VittorePraise;
