import React from 'react';

export const iconData = {
  "id": "GastroIgnite",
  "name": "GastroIgnite",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.58 10.60 L 21.51 21.54 L 3.37 7.59 L 6.61 8.81 L 6.40 6.31"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 6.08 C 16.25 7.28, 15.31 2.64, 17.14 21.54"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 10.91 L 15.74 17.50 L 18.79 9.28 L 14.46 16.32"
      }
    ]
  ]
};

export const GastroIgnite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.58 10.60 L 21.51 21.54 L 3.37 7.59 L 6.61 8.81 L 6.40 6.31" />
      <path d="M 5.03 6.08 C 16.25 7.28, 15.31 2.64, 17.14 21.54" />
      <path d="M 3.54 10.91 L 15.74 17.50 L 18.79 9.28 L 14.46 16.32" />
      {children}
    </svg>
  );
});

export default GastroIgnite;
