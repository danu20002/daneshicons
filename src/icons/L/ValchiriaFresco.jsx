import React from 'react';

export const iconData = {
  "id": "ValchiriaFresco",
  "name": "ValchiriaFresco",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.72 12.00 Q 15.08 15.08 12.00 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.72 Q 8.92 15.08 3.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 12.00 Q 8.92 8.92 12.00 3.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.28 Q 15.08 8.92 20.72 12.00"
      }
    ]
  ]
};

export const ValchiriaFresco = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.72 12.00 Q 15.08 15.08 12.00 20.72" />
      <path d="M 12.00 20.72 Q 8.92 15.08 3.28 12.00" />
      <path d="M 3.28 12.00 Q 8.92 8.92 12.00 3.28" />
      <path d="M 12.00 3.28 Q 15.08 8.92 20.72 12.00" />
      {children}
    </svg>
  );
});

export default ValchiriaFresco;
