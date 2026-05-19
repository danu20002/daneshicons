import React from 'react';

export const iconData = {
  "id": "BrunoAura",
  "name": "BrunoAura",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 6.11 L 20.31 6.11 L 20.31 17.89 L 3.69 17.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 6.11 L 7.42 2.38 L 24.05 2.38 L 20.31 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 6.11 L 24.05 2.38 L 24.05 14.16 L 20.31 17.89"
      }
    ]
  ]
};

export const BrunoAura = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 6.11 L 20.31 6.11 L 20.31 17.89 L 3.69 17.89 Z" />
      <path d="M 3.69 6.11 L 7.42 2.38 L 24.05 2.38 L 20.31 6.11" />
      <path d="M 20.31 6.11 L 24.05 2.38 L 24.05 14.16 L 20.31 17.89" />
      {children}
    </svg>
  );
});

export default BrunoAura;
