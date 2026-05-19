import React from 'react';

export const iconData = {
  "id": "VectisQuilt",
  "name": "VectisQuilt",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.14 3.94 L 15.71 10.55"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 3.12 L 9.96 3.37 L 13.15 5.19 L 5.47 21.76 L 15.84 18.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 16.85 C 20.26 18.92, 11.87 6.11, 8.73 10.70"
      }
    ]
  ]
};

export const VectisQuilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.14 3.94 L 15.71 10.55" />
      <path d="M 4.47 3.12 L 9.96 3.37 L 13.15 5.19 L 5.47 21.76 L 15.84 18.37" />
      <path d="M 7.28 16.85 C 20.26 18.92, 11.87 6.11, 8.73 10.70" />
      {children}
    </svg>
  );
});

export default VectisQuilt;
