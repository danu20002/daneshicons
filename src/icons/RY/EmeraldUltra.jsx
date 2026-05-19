import React from 'react';

export const iconData = {
  "id": "EmeraldUltra",
  "name": "EmeraldUltra",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 6.98 L 20.07 6.98 L 20.07 17.02 L 3.93 17.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 6.98 L 8.86 2.05 L 25.00 2.05 L 20.07 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 20.07 6.98 L 25.00 2.05 L 25.00 12.08 L 20.07 17.02"
      }
    ]
  ]
};

export const EmeraldUltra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 6.98 L 20.07 6.98 L 20.07 17.02 L 3.93 17.02 Z" />
      <path d="M 3.93 6.98 L 8.86 2.05 L 25.00 2.05 L 20.07 6.98" />
      <path d="M 20.07 6.98 L 25.00 2.05 L 25.00 12.08 L 20.07 17.02" />
      {children}
    </svg>
  );
});

export default EmeraldUltra;
