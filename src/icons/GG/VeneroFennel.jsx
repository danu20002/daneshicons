import React from 'react';

export const iconData = {
  "id": "VeneroFennel",
  "name": "VeneroFennel",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 6.54 L 19.29 6.54 L 19.29 17.46 L 4.71 17.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 6.54 L 9.62 1.63 L 24.20 1.63 L 19.29 6.54"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 6.54 L 24.20 1.63 L 24.20 12.55 L 19.29 17.46"
      }
    ]
  ]
};

export const VeneroFennel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 6.54 L 19.29 6.54 L 19.29 17.46 L 4.71 17.46 Z" />
      <path d="M 4.71 6.54 L 9.62 1.63 L 24.20 1.63 L 19.29 6.54" />
      <path d="M 19.29 6.54 L 24.20 1.63 L 24.20 12.55 L 19.29 17.46" />
      {children}
    </svg>
  );
});

export default VeneroFennel;
