import React from 'react';

export const iconData = {
  "id": "TonicoRice",
  "name": "TonicoRice",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 6.90 L 20.96 6.90 L 20.96 17.10 L 3.04 17.10 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 6.90 L 6.64 3.30 L 24.56 3.30 L 20.96 6.90"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 6.90 L 24.56 3.30 L 24.56 13.49 L 20.96 17.10"
      }
    ]
  ]
};

export const TonicoRice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 6.90 L 20.96 6.90 L 20.96 17.10 L 3.04 17.10 Z" />
      <path d="M 3.04 6.90 L 6.64 3.30 L 24.56 3.30 L 20.96 6.90" />
      <path d="M 20.96 6.90 L 24.56 3.30 L 24.56 13.49 L 20.96 17.10" />
      {children}
    </svg>
  );
});

export default TonicoRice;
