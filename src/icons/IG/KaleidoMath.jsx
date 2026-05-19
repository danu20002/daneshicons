import React from 'react';

export const iconData = {
  "id": "KaleidoMath",
  "name": "KaleidoMath",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.61 18.25 L 18.17 2.26 L 16.49 5.59 L 13.04 8.90 L 5.98 17.74 L 18.20 8.79 L 20.51 16.57 L 7.28 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 11.85 6.63 A 2.56 4.22 179 0 1 10.34 4.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.86 20.27 A 4.43 5.10 81 0 1 20.66 7.69"
      }
    ]
  ]
};

export const KaleidoMath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.61 18.25 L 18.17 2.26 L 16.49 5.59 L 13.04 8.90 L 5.98 17.74 L 18.20 8.79 L 20.51 16.57 L 7.28 21.95" />
      <path d="M 11.85 6.63 A 2.56 4.22 179 0 1 10.34 4.85" />
      <path d="M 17.86 20.27 A 4.43 5.10 81 0 1 20.66 7.69" />
      {children}
    </svg>
  );
});

export default KaleidoMath;
