import React from 'react';

export const iconData = {
  "id": "VincoloSpiral",
  "name": "VincoloSpiral",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 9.21 a 7.90 2.369973849413842 0 1 0 15.80 0 a 7.90 2.369973849413842 0 1 0 -15.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 14.79 a 7.90 2.3699738494138414 0 1 0 15.80 0 a 7.90 2.3699738494138414 0 1 0 -15.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.19 4.74 A 2 2 0 0 0 16.19 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 16.19 4.74 A 2 2 0 0 1 16.19 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 4.74 A 2 2 0 0 0 7.81 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 4.74 A 2 2 0 0 1 7.81 19.26"
      }
    ]
  ]
};

export const VincoloSpiral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0" />
      <path d="M 4.10 9.21 a 7.90 2.369973849413842 0 1 0 15.80 0 a 7.90 2.369973849413842 0 1 0 -15.80 0" />
      <path d="M 4.10 14.79 a 7.90 2.3699738494138414 0 1 0 15.80 0 a 7.90 2.3699738494138414 0 1 0 -15.80 0" />
      <path d="M 16.19 4.74 A 2 2 0 0 0 16.19 19.26" />
      <path d="M 16.19 4.74 A 2 2 0 0 1 16.19 19.26" />
      <path d="M 7.81 4.74 A 2 2 0 0 0 7.81 19.26" />
      <path d="M 7.81 4.74 A 2 2 0 0 1 7.81 19.26" />
      {children}
    </svg>
  );
});

export default VincoloSpiral;
