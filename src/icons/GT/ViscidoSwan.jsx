import React from 'react';

export const iconData = {
  "id": "ViscidoSwan",
  "name": "ViscidoSwan",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.00 12.00 L 19.00 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.00 L 12.00 19.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 7.10 L 16.90 16.90"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 16.90 L 16.90 7.10"
      }
    ],
    [
      "path",
      {
        "d": "M 1.58 12.00 a 10.42 10.42 0 1 0 20.85 0 a 10.42 10.42 0 1 0 -20.85 0"
      }
    ]
  ]
};

export const ViscidoSwan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.00 12.00 L 19.00 12.00" />
      <path d="M 12.00 5.00 L 12.00 19.00" />
      <path d="M 7.10 7.10 L 16.90 16.90" />
      <path d="M 7.10 16.90 L 16.90 7.10" />
      <path d="M 1.58 12.00 a 10.42 10.42 0 1 0 20.85 0 a 10.42 10.42 0 1 0 -20.85 0" />
      {children}
    </svg>
  );
});

export default ViscidoSwan;
