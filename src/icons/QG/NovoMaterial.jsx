import React from 'react';

export const iconData = {
  "id": "NovoMaterial",
  "name": "NovoMaterial",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.63 6.32 L 12.63 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 16.36 7.04 L 17.59 10.84"
      }
    ],
    [
      "path",
      {
        "d": "M 18.06 14.61 L 14.83 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 11.39 18.57 L 8.15 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 13.45 L 6.80 9.65"
      }
    ]
  ]
};

export const NovoMaterial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.63 6.32 L 12.63 6.32" />
      <path d="M 16.36 7.04 L 17.59 10.84" />
      <path d="M 18.06 14.61 L 14.83 16.96" />
      <path d="M 11.39 18.57 L 8.15 16.22" />
      <path d="M 5.56 13.45 L 6.80 9.65" />
      {children}
    </svg>
  );
});

export default NovoMaterial;
