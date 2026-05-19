import React from 'react';

export const iconData = {
  "id": "FractoSuspend",
  "name": "FractoSuspend",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.15 10.52 L 12.15 10.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.22 7.88 L 13.46 11.68"
      }
    ],
    [
      "path",
      {
        "d": "M 15.99 10.94 L 12.75 13.29"
      }
    ],
    [
      "path",
      {
        "d": "M 14.24 15.46 L 11.01 13.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.40 15.20 L 10.63 11.40"
      }
    ]
  ]
};

export const FractoSuspend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.15 10.52 L 12.15 10.52" />
      <path d="M 12.22 7.88 L 13.46 11.68" />
      <path d="M 15.99 10.94 L 12.75 13.29" />
      <path d="M 14.24 15.46 L 11.01 13.11" />
      <path d="M 9.40 15.20 L 10.63 11.40" />
      {children}
    </svg>
  );
});

export default FractoSuspend;
