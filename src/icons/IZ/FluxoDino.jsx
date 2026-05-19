import React from 'react';

export const iconData = {
  "id": "FluxoDino",
  "name": "FluxoDino",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.48 10.52 L 8.56 15.72 L 3.27 14.62 L 7.59 4.47"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 6.58 L 7.84 17.04 L 17.69 4.83 L 3.29 14.50 L 8.36 7.50 L 13.92 2.24 L 21.92 17.27"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 12.00 L 5.12 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 18.72 C 15.45 13.36, 2.47 15.97, 17.13 4.42"
      }
    ]
  ]
};

export const FluxoDino = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.48 10.52 L 8.56 15.72 L 3.27 14.62 L 7.59 4.47" />
      <path d="M 3.10 6.58 L 7.84 17.04 L 17.69 4.83 L 3.29 14.50 L 8.36 7.50 L 13.92 2.24 L 21.92 17.27" />
      <path d="M 4.68 12.00 L 5.12 5.28" />
      <path d="M 9.07 18.72 C 15.45 13.36, 2.47 15.97, 17.13 4.42" />
      {children}
    </svg>
  );
});

export default FluxoDino;
