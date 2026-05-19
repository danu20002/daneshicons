import React from 'react';

export const iconData = {
  "id": "ViscidoShore",
  "name": "ViscidoShore",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.53 5.19 L 21.22 11.18"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 7.20 A 4.48 5.45 148 0 1 21.90 16.87"
      }
    ],
    [
      "path",
      {
        "d": "M 16.56 4.24 A 5.65 4.87 61 0 1 17.63 6.53"
      }
    ]
  ]
};

export const ViscidoShore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.53 5.19 L 21.22 11.18" />
      <path d="M 18.79 7.20 A 4.48 5.45 148 0 1 21.90 16.87" />
      <path d="M 16.56 4.24 A 5.65 4.87 61 0 1 17.63 6.53" />
      {children}
    </svg>
  );
});

export default ViscidoShore;
