import React from 'react';

export const iconData = {
  "id": "PlacoScope",
  "name": "PlacoScope",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.60 3.87 L 14.07 2.74 L 15.82 3.27 L 7.96 10.55 L 19.03 21.82"
      }
    ],
    [
      "path",
      {
        "d": "M 11.65 4.41 L 4.72 5.66 L 7.23 2.86 L 5.52 9.58 L 9.20 14.41 L 18.69 9.63 L 18.18 5.76"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 16.74 L 4.01 18.43 L 19.01 14.70 L 2.34 15.27"
      }
    ]
  ]
};

export const PlacoScope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.60 3.87 L 14.07 2.74 L 15.82 3.27 L 7.96 10.55 L 19.03 21.82" />
      <path d="M 11.65 4.41 L 4.72 5.66 L 7.23 2.86 L 5.52 9.58 L 9.20 14.41 L 18.69 9.63 L 18.18 5.76" />
      <path d="M 19.36 16.74 L 4.01 18.43 L 19.01 14.70 L 2.34 15.27" />
      {children}
    </svg>
  );
});

export default PlacoScope;
