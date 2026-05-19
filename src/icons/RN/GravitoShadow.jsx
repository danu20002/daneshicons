import React from 'react';

export const iconData = {
  "id": "GravitoShadow",
  "name": "GravitoShadow",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.94 12.00 a 2.06 2.06 0 1 0 4.12 0 a 2.06 2.06 0 1 0 -4.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 12.00 a 6.14 6.14 0 1 0 12.27 0 a 6.14 6.14 0 1 0 -12.27 0"
      }
    ]
  ]
};

export const GravitoShadow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.94 12.00 a 2.06 2.06 0 1 0 4.12 0 a 2.06 2.06 0 1 0 -4.12 0" />
      <path d="M 5.86 12.00 a 6.14 6.14 0 1 0 12.27 0 a 6.14 6.14 0 1 0 -12.27 0" />
      {children}
    </svg>
  );
});

export default GravitoShadow;
