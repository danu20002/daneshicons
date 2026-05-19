import React from 'react';

export const iconData = {
  "id": "SpicoTown",
  "name": "SpicoTown",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.24 12.00 L 16.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.24 12.00 L 11.07 9.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.24 12.00 L 11.07 14.30"
      }
    ]
  ]
};

export const SpicoTown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.24 12.00 L 16.76 12.00" />
      <path d="M 7.24 12.00 L 11.07 9.70" />
      <path d="M 7.24 12.00 L 11.07 14.30" />
      {children}
    </svg>
  );
});

export default SpicoTown;
