import React from 'react';

export const iconData = {
  "id": "NeutroEmbrace",
  "name": "NeutroEmbrace",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.66 10.92 A 2.74 3.98 119 0 1 16.92 3.43"
      }
    ],
    [
      "path",
      {
        "d": "M 8.96 21.21 A 4.58 6.63 64 0 0 13.14 6.79"
      }
    ]
  ]
};

export const NeutroEmbrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.66 10.92 A 2.74 3.98 119 0 1 16.92 3.43" />
      <path d="M 8.96 21.21 A 4.58 6.63 64 0 0 13.14 6.79" />
      {children}
    </svg>
  );
});

export default NeutroEmbrace;
