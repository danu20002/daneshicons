import React from 'react';

export const iconData = {
  "id": "ViscidoRemind",
  "name": "ViscidoRemind",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.18 13.27 L 13.63 21.13 L 3.82 16.37 L 5.32 5.57 L 16.05 3.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 14.67 L 11.28 18.41 L 5.68 13.30 L 8.81 6.39 L 16.35 7.24 Z"
      }
    ]
  ]
};

export const ViscidoRemind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.18 13.27 L 13.63 21.13 L 3.82 16.37 L 5.32 5.57 L 16.05 3.66 Z" />
      <path d="M 17.88 14.67 L 11.28 18.41 L 5.68 13.30 L 8.81 6.39 L 16.35 7.24 Z" />
      {children}
    </svg>
  );
});

export default ViscidoRemind;
