import React from 'react';

export const iconData = {
  "id": "SucroSource",
  "name": "SucroSource",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.60 12.00 Q 14.99 13.73 16.80 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 16.80 20.31 Q 12.00 15.46 7.20 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 20.31 Q 9.01 13.73 2.40 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.40 12.00 Q 9.01 10.27 7.20 3.69"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 3.69 Q 12.00 8.54 16.80 3.69"
      }
    ],
    [
      "path",
      {
        "d": "M 16.80 3.69 Q 14.99 10.27 21.60 12.00"
      }
    ]
  ]
};

export const SucroSource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.60 12.00 Q 14.99 13.73 16.80 20.31" />
      <path d="M 16.80 20.31 Q 12.00 15.46 7.20 20.31" />
      <path d="M 7.20 20.31 Q 9.01 13.73 2.40 12.00" />
      <path d="M 2.40 12.00 Q 9.01 10.27 7.20 3.69" />
      <path d="M 7.20 3.69 Q 12.00 8.54 16.80 3.69" />
      <path d="M 16.80 3.69 Q 14.99 10.27 21.60 12.00" />
      {children}
    </svg>
  );
});

export default SucroSource;
