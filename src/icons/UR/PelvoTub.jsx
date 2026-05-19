import React from 'react';

export const iconData = {
  "id": "PelvoTub",
  "name": "PelvoTub",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.51 10.92 L 17.15 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 12.03 C 21.49 6.38, 2.44 6.17, 6.73 14.31"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 21.04 Q 2.85 14.94 14.14 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 17.85 L 15.62 10.47"
      }
    ]
  ]
};

export const PelvoTub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.51 10.92 L 17.15 17.73" />
      <path d="M 19.18 12.03 C 21.49 6.38, 2.44 6.17, 6.73 14.31" />
      <path d="M 18.72 21.04 Q 2.85 14.94 14.14 16.64" />
      <path d="M 7.99 17.85 L 15.62 10.47" />
      {children}
    </svg>
  );
});

export default PelvoTub;
