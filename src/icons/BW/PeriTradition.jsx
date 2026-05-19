import React from 'react';

export const iconData = {
  "id": "PeriTradition",
  "name": "PeriTradition",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 5.87 L 20.56 5.87 L 20.56 18.13 L 3.44 18.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 5.87 L 8.05 1.27 L 25.16 1.27 L 20.56 5.87"
      }
    ],
    [
      "path",
      {
        "d": "M 20.56 5.87 L 25.16 1.27 L 25.16 13.52 L 20.56 18.13"
      }
    ]
  ]
};

export const PeriTradition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 5.87 L 20.56 5.87 L 20.56 18.13 L 3.44 18.13 Z" />
      <path d="M 3.44 5.87 L 8.05 1.27 L 25.16 1.27 L 20.56 5.87" />
      <path d="M 20.56 5.87 L 25.16 1.27 L 25.16 13.52 L 20.56 18.13" />
      {children}
    </svg>
  );
});

export default PeriTradition;
