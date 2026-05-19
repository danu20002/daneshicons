import React from 'react';

export const iconData = {
  "id": "TurbidoTuition",
  "name": "TurbidoTuition",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.50 6.50 A 6.55 5.81 112 0 1 5.25 3.12"
      }
    ],
    [
      "path",
      {
        "d": "M 6.64 15.48 L 14.71 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.68 16.49 L 21.81 8.23 L 20.11 2.08 L 9.32 21.10 L 18.92 19.99 L 5.37 11.41 L 3.56 13.54 L 20.74 19.73"
      }
    ]
  ]
};

export const TurbidoTuition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.50 6.50 A 6.55 5.81 112 0 1 5.25 3.12" />
      <path d="M 6.64 15.48 L 14.71 3.40" />
      <path d="M 9.68 16.49 L 21.81 8.23 L 20.11 2.08 L 9.32 21.10 L 18.92 19.99 L 5.37 11.41 L 3.56 13.54 L 20.74 19.73" />
      {children}
    </svg>
  );
});

export default TurbidoTuition;
