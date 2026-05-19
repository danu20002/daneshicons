import React from 'react';

export const iconData = {
  "id": "SucroFlat",
  "name": "SucroFlat",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 6.04 L 19.12 6.04 L 19.12 17.96 L 4.88 17.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 6.04 L 9.77 1.15 L 24.01 1.15 L 19.12 6.04"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 6.04 L 24.01 1.15 L 24.01 13.08 L 19.12 17.96"
      }
    ]
  ]
};

export const SucroFlat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 6.04 L 19.12 6.04 L 19.12 17.96 L 4.88 17.96 Z" />
      <path d="M 4.88 6.04 L 9.77 1.15 L 24.01 1.15 L 19.12 6.04" />
      <path d="M 19.12 6.04 L 24.01 1.15 L 24.01 13.08 L 19.12 17.96" />
      {children}
    </svg>
  );
});

export default SucroFlat;
