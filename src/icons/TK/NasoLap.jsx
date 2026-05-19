import React from 'react';

export const iconData = {
  "id": "NasoLap",
  "name": "NasoLap",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 5.57 L 20.08 5.57 L 20.08 18.43 L 3.92 18.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 5.57 L 8.65 0.84 L 24.80 0.84 L 20.08 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 20.08 5.57 L 24.80 0.84 L 24.80 13.70 L 20.08 18.43"
      }
    ]
  ]
};

export const NasoLap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 5.57 L 20.08 5.57 L 20.08 18.43 L 3.92 18.43 Z" />
      <path d="M 3.92 5.57 L 8.65 0.84 L 24.80 0.84 L 20.08 5.57" />
      <path d="M 20.08 5.57 L 24.80 0.84 L 24.80 13.70 L 20.08 18.43" />
      {children}
    </svg>
  );
});

export default NasoLap;
