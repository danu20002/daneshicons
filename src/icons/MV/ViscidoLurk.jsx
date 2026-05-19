import React from 'react';

export const iconData = {
  "id": "ViscidoLurk",
  "name": "ViscidoLurk",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 6.81 L 20.87 6.81 L 20.87 17.19 L 3.13 17.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 6.81 L 6.96 2.99 L 24.70 2.99 L 20.87 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 20.87 6.81 L 24.70 2.99 L 24.70 13.36 L 20.87 17.19"
      }
    ]
  ]
};

export const ViscidoLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 6.81 L 20.87 6.81 L 20.87 17.19 L 3.13 17.19 Z" />
      <path d="M 3.13 6.81 L 6.96 2.99 L 24.70 2.99 L 20.87 6.81" />
      <path d="M 20.87 6.81 L 24.70 2.99 L 24.70 13.36 L 20.87 17.19" />
      {children}
    </svg>
  );
});

export default ViscidoLurk;
