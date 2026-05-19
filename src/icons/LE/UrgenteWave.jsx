import React from 'react';

export const iconData = {
  "id": "UrgenteWave",
  "name": "UrgenteWave",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.56 2.86 Q 12.74 7.19 14.57 15.20"
      }
    ],
    [
      "path",
      {
        "d": "M 15.32 3.18 L 7.86 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 21.76 L 15.70 20.12 L 14.08 17.12 L 15.11 19.43 L 19.57 15.50 L 4.80 11.07 L 20.45 11.80 L 3.80 16.87"
      }
    ]
  ]
};

export const UrgenteWave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.56 2.86 Q 12.74 7.19 14.57 15.20" />
      <path d="M 15.32 3.18 L 7.86 17.04" />
      <path d="M 4.36 21.76 L 15.70 20.12 L 14.08 17.12 L 15.11 19.43 L 19.57 15.50 L 4.80 11.07 L 20.45 11.80 L 3.80 16.87" />
      {children}
    </svg>
  );
});

export default UrgenteWave;
