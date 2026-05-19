import React from 'react';

export const iconData = {
  "id": "QuerciMast",
  "name": "QuerciMast",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 5.30 L 20.47 5.30 L 20.47 18.70 L 3.53 18.70 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 5.30 L 7.70 1.13 L 24.64 1.13 L 20.47 5.30"
      }
    ],
    [
      "path",
      {
        "d": "M 20.47 5.30 L 24.64 1.13 L 24.64 14.53 L 20.47 18.70"
      }
    ]
  ]
};

export const QuerciMast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 5.30 L 20.47 5.30 L 20.47 18.70 L 3.53 18.70 Z" />
      <path d="M 3.53 5.30 L 7.70 1.13 L 24.64 1.13 L 20.47 5.30" />
      <path d="M 20.47 5.30 L 24.64 1.13 L 24.64 14.53 L 20.47 18.70" />
      {children}
    </svg>
  );
});

export default QuerciMast;
