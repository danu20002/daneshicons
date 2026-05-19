import React from 'react';

export const iconData = {
  "id": "LuteoPlumber",
  "name": "LuteoPlumber",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 5.49 L 20.13 5.49 L 20.13 18.51 L 3.87 18.51 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 5.49 L 8.17 1.19 L 24.42 1.19 L 20.13 5.49"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 5.49 L 24.42 1.19 L 24.42 14.22 L 20.13 18.51"
      }
    ]
  ]
};

export const LuteoPlumber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 5.49 L 20.13 5.49 L 20.13 18.51 L 3.87 18.51 Z" />
      <path d="M 3.87 5.49 L 8.17 1.19 L 24.42 1.19 L 20.13 5.49" />
      <path d="M 20.13 5.49 L 24.42 1.19 L 24.42 14.22 L 20.13 18.51" />
      {children}
    </svg>
  );
});

export default LuteoPlumber;
