import React from 'react';

export const iconData = {
  "id": "QuasiPierce",
  "name": "QuasiPierce",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.16 9.30 L 15.16 9.30"
      }
    ],
    [
      "path",
      {
        "d": "M 14.70 11.16 L 14.70 15.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.84 14.70 L 8.84 14.70"
      }
    ],
    [
      "path",
      {
        "d": "M 9.30 12.84 L 9.30 8.84"
      }
    ]
  ]
};

export const QuasiPierce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.16 9.30 L 15.16 9.30" />
      <path d="M 14.70 11.16 L 14.70 15.16" />
      <path d="M 12.84 14.70 L 8.84 14.70" />
      <path d="M 9.30 12.84 L 9.30 8.84" />
      {children}
    </svg>
  );
});

export default QuasiPierce;
