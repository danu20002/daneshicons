import React from 'react';

export const iconData = {
  "id": "ViscidoStir",
  "name": "ViscidoStir",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 15.48 A 2.49 2.15 105 0 1 20.17 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 9.54 14.50 L 8.91 18.59"
      }
    ],
    [
      "path",
      {
        "d": "M 21.98 15.83 C 5.60 5.11, 10.66 9.29, 19.83 21.98"
      }
    ],
    [
      "path",
      {
        "d": "M 16.46 20.91 A 5.02 5.46 10 0 0 7.49 17.60"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 21.75 L 12.45 10.04 L 3.73 3.68 L 11.85 5.73"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 6.51 L 7.88 20.16"
      }
    ]
  ]
};

export const ViscidoStir = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 15.48 A 2.49 2.15 105 0 1 20.17 21.92" />
      <path d="M 9.54 14.50 L 8.91 18.59" />
      <path d="M 21.98 15.83 C 5.60 5.11, 10.66 9.29, 19.83 21.98" />
      <path d="M 16.46 20.91 A 5.02 5.46 10 0 0 7.49 17.60" />
      <path d="M 18.18 21.75 L 12.45 10.04 L 3.73 3.68 L 11.85 5.73" />
      <path d="M 20.89 6.51 L 7.88 20.16" />
      {children}
    </svg>
  );
});

export default ViscidoStir;
