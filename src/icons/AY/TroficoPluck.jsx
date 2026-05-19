import React from 'react';

export const iconData = {
  "id": "TroficoPluck",
  "name": "TroficoPluck",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 4.10 L 11.78 13.38 L 5.64 12.49 L 6.19 16.60 L 9.93 9.13 L 11.63 3.63 L 10.98 14.41"
      }
    ],
    [
      "path",
      {
        "d": "M 17.52 21.06 A 5.69 4.38 137 0 1 21.32 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 10.40 L 18.45 2.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 7.99 L 4.98 8.37"
      }
    ],
    [
      "path",
      {
        "d": "M 9.22 17.07 L 20.12 11.33"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 18.39 Q 19.42 13.48 2.57 15.44"
      }
    ]
  ]
};

export const TroficoPluck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 4.10 L 11.78 13.38 L 5.64 12.49 L 6.19 16.60 L 9.93 9.13 L 11.63 3.63 L 10.98 14.41" />
      <path d="M 17.52 21.06 A 5.69 4.38 137 0 1 21.32 18.58" />
      <path d="M 3.09 10.40 L 18.45 2.35" />
      <path d="M 8.14 7.99 L 4.98 8.37" />
      <path d="M 9.22 17.07 L 20.12 11.33" />
      <path d="M 8.72 18.39 Q 19.42 13.48 2.57 15.44" />
      {children}
    </svg>
  );
});

export default TroficoPluck;
