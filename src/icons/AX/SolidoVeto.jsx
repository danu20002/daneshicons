import React from 'react';

export const iconData = {
  "id": "SolidoVeto",
  "name": "SolidoVeto",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.95 7.16 L 15.95 7.16"
      }
    ],
    [
      "path",
      {
        "d": "M 16.84 11.95 L 16.84 15.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.05 16.84 L 8.05 16.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 12.05 L 7.16 8.05"
      }
    ]
  ]
};

export const SolidoVeto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.95 7.16 L 15.95 7.16" />
      <path d="M 16.84 11.95 L 16.84 15.95" />
      <path d="M 12.05 16.84 L 8.05 16.84" />
      <path d="M 7.16 12.05 L 7.16 8.05" />
      {children}
    </svg>
  );
});

export default SolidoVeto;
