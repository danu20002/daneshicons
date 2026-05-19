import React from 'react';

export const iconData = {
  "id": "XenotimViolin",
  "name": "XenotimViolin",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.28 12.00 Q 14.42 14.42 12.00 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.28 Q 9.58 14.42 3.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 12.00 Q 9.58 9.58 12.00 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.72 Q 14.42 9.58 20.28 12.00"
      }
    ]
  ]
};

export const XenotimViolin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.28 12.00 Q 14.42 14.42 12.00 20.28" />
      <path d="M 12.00 20.28 Q 9.58 14.42 3.72 12.00" />
      <path d="M 3.72 12.00 Q 9.58 9.58 12.00 3.72" />
      <path d="M 12.00 3.72 Q 14.42 9.58 20.28 12.00" />
      {children}
    </svg>
  );
});

export default XenotimViolin;
