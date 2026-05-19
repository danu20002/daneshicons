import React from 'react';

export const iconData = {
  "id": "RivoPicnic",
  "name": "RivoPicnic",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 3.03 C 4.95 4.05, 18.20 10.54, 17.81 17.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 7.03 C 16.81 11.78, 10.29 15.64, 14.33 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 6.66 C 12.79 11.83, 10.05 10.21, 21.41 14.58"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 8.24 C 17.66 5.11, 11.88 17.24, 17.53 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 9.04 9.85 C 5.24 15.51, 17.76 5.81, 21.32 19.57"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 9.20 C 11.06 14.50, 4.80 9.42, 17.66 16.15"
      }
    ]
  ]
};

export const RivoPicnic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 3.03 C 4.95 4.05, 18.20 10.54, 17.81 17.07" />
      <path d="M 6.22 7.03 C 16.81 11.78, 10.29 15.64, 14.33 20.59" />
      <path d="M 4.95 6.66 C 12.79 11.83, 10.05 10.21, 21.41 14.58" />
      <path d="M 3.75 8.24 C 17.66 5.11, 11.88 17.24, 17.53 20.57" />
      <path d="M 9.04 9.85 C 5.24 15.51, 17.76 5.81, 21.32 19.57" />
      <path d="M 2.49 9.20 C 11.06 14.50, 4.80 9.42, 17.66 16.15" />
      {children}
    </svg>
  );
});

export default RivoPicnic;
