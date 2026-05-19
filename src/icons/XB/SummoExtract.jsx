import React from 'react';

export const iconData = {
  "id": "SummoExtract",
  "name": "SummoExtract",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 5.27 L 19.17 5.27 L 19.17 18.73 L 4.83 18.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 5.27 L 9.08 1.01 L 23.43 1.01 L 19.17 5.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 5.27 L 23.43 1.01 L 23.43 14.48 L 19.17 18.73"
      }
    ]
  ]
};

export const SummoExtract = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 5.27 L 19.17 5.27 L 19.17 18.73 L 4.83 18.73 Z" />
      <path d="M 4.83 5.27 L 9.08 1.01 L 23.43 1.01 L 19.17 5.27" />
      <path d="M 19.17 5.27 L 23.43 1.01 L 23.43 14.48 L 19.17 18.73" />
      {children}
    </svg>
  );
});

export default SummoExtract;
