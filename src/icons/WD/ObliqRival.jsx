import React from 'react';

export const iconData = {
  "id": "ObliqRival",
  "name": "ObliqRival",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.34 12.23 C 21.71 10.67, 13.99 4.94, 18.56 14.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 13.37 C 20.84 14.56, 12.31 14.39, 6.26 5.54"
      }
    ],
    [
      "path",
      {
        "d": "M 20.53 21.78 L 3.13 15.96 L 19.06 6.37 L 19.04 4.21 L 21.30 9.86"
      }
    ],
    [
      "path",
      {
        "d": "M 17.62 20.19 L 21.38 8.80 L 2.68 19.86 L 18.33 12.50 L 12.86 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 15.93 4.99 L 15.00 11.16"
      }
    ]
  ]
};

export const ObliqRival = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.34 12.23 C 21.71 10.67, 13.99 4.94, 18.56 14.72" />
      <path d="M 7.60 13.37 C 20.84 14.56, 12.31 14.39, 6.26 5.54" />
      <path d="M 20.53 21.78 L 3.13 15.96 L 19.06 6.37 L 19.04 4.21 L 21.30 9.86" />
      <path d="M 17.62 20.19 L 21.38 8.80 L 2.68 19.86 L 18.33 12.50 L 12.86 17.37" />
      <path d="M 15.93 4.99 L 15.00 11.16" />
      {children}
    </svg>
  );
});

export default ObliqRival;
