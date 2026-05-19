import React from 'react';

export const iconData = {
  "id": "ProboSoft",
  "name": "ProboSoft",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 5.92 L 19.94 5.92 L 19.94 18.08 L 4.06 18.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 5.92 L 7.80 2.18 L 23.69 2.18 L 19.94 5.92"
      }
    ],
    [
      "path",
      {
        "d": "M 19.94 5.92 L 23.69 2.18 L 23.69 14.33 L 19.94 18.08"
      }
    ]
  ]
};

export const ProboSoft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 5.92 L 19.94 5.92 L 19.94 18.08 L 4.06 18.08 Z" />
      <path d="M 4.06 5.92 L 7.80 2.18 L 23.69 2.18 L 19.94 5.92" />
      <path d="M 19.94 5.92 L 23.69 2.18 L 23.69 14.33 L 19.94 18.08" />
      {children}
    </svg>
  );
});

export default ProboSoft;
