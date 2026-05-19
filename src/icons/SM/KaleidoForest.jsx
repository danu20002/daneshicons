import React from 'react';

export const iconData = {
  "id": "KaleidoForest",
  "name": "KaleidoForest",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.79 11.49 Q 5.43 20.24 11.59 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 9.15 C 20.79 16.15, 9.33 16.15, 9.10 5.63"
      }
    ],
    [
      "path",
      {
        "d": "M 2.44 17.31 Q 5.63 14.44 9.58 9.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 3.74 C 20.19 9.27, 21.60 6.41, 17.37 8.46"
      }
    ],
    [
      "path",
      {
        "d": "M 9.49 17.95 C 15.16 14.03, 15.60 5.01, 10.44 15.03"
      }
    ],
    [
      "path",
      {
        "d": "M 20.74 15.46 L 8.17 15.45"
      }
    ]
  ]
};

export const KaleidoForest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.79 11.49 Q 5.43 20.24 11.59 18.52" />
      <path d="M 7.67 9.15 C 20.79 16.15, 9.33 16.15, 9.10 5.63" />
      <path d="M 2.44 17.31 Q 5.63 14.44 9.58 9.96" />
      <path d="M 7.08 3.74 C 20.19 9.27, 21.60 6.41, 17.37 8.46" />
      <path d="M 9.49 17.95 C 15.16 14.03, 15.60 5.01, 10.44 15.03" />
      <path d="M 20.74 15.46 L 8.17 15.45" />
      {children}
    </svg>
  );
});

export default KaleidoForest;
