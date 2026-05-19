import React from 'react';

export const iconData = {
  "id": "KiloExhaust",
  "name": "KiloExhaust",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.55 6.32 L 19.45 6.32 L 19.45 17.68 L 4.55 17.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.55 6.32 L 7.76 3.11 L 22.66 3.11 L 19.45 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 19.45 6.32 L 22.66 3.11 L 22.66 14.47 L 19.45 17.68"
      }
    ]
  ]
};

export const KiloExhaust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.55 6.32 L 19.45 6.32 L 19.45 17.68 L 4.55 17.68 Z" />
      <path d="M 4.55 6.32 L 7.76 3.11 L 22.66 3.11 L 19.45 6.32" />
      <path d="M 19.45 6.32 L 22.66 3.11 L 22.66 14.47 L 19.45 17.68" />
      {children}
    </svg>
  );
});

export default KiloExhaust;
