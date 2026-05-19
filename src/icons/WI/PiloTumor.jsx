import React from 'react';

export const iconData = {
  "id": "PiloTumor",
  "name": "PiloTumor",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.31 6.13 L 19.69 6.13 L 19.69 17.87 L 4.31 17.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 6.13 L 7.91 2.52 L 23.30 2.52 L 19.69 6.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.69 6.13 L 23.30 2.52 L 23.30 14.27 L 19.69 17.87"
      }
    ]
  ]
};

export const PiloTumor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.31 6.13 L 19.69 6.13 L 19.69 17.87 L 4.31 17.87 Z" />
      <path d="M 4.31 6.13 L 7.91 2.52 L 23.30 2.52 L 19.69 6.13" />
      <path d="M 19.69 6.13 L 23.30 2.52 L 23.30 14.27 L 19.69 17.87" />
      {children}
    </svg>
  );
});

export default PiloTumor;
