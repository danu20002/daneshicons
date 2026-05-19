import React from 'react';

export const iconData = {
  "id": "QuerciOutlet",
  "name": "QuerciOutlet",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.67 5.99 Q 21.12 6.04 19.73 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 21.79 7.04 L 2.34 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 6.64 L 8.75 3.10 L 21.14 18.53 L 18.31 7.73 L 13.41 19.05 L 4.02 2.05 L 20.98 5.51"
      }
    ]
  ]
};

export const QuerciOutlet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.67 5.99 Q 21.12 6.04 19.73 15.22" />
      <path d="M 21.79 7.04 L 2.34 20.57" />
      <path d="M 7.67 6.64 L 8.75 3.10 L 21.14 18.53 L 18.31 7.73 L 13.41 19.05 L 4.02 2.05 L 20.98 5.51" />
      {children}
    </svg>
  );
});

export default QuerciOutlet;
