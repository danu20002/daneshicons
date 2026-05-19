import React from 'react';

export const iconData = {
  "id": "SurdoRetain",
  "name": "SurdoRetain",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 6.48 L 20.80 6.48 L 20.80 17.52 L 3.20 17.52 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 6.48 L 7.04 2.64 L 24.64 2.64 L 20.80 6.48"
      }
    ],
    [
      "path",
      {
        "d": "M 20.80 6.48 L 24.64 2.64 L 24.64 13.68 L 20.80 17.52"
      }
    ]
  ]
};

export const SurdoRetain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 6.48 L 20.80 6.48 L 20.80 17.52 L 3.20 17.52 Z" />
      <path d="M 3.20 6.48 L 7.04 2.64 L 24.64 2.64 L 20.80 6.48" />
      <path d="M 20.80 6.48 L 24.64 2.64 L 24.64 13.68 L 20.80 17.52" />
      {children}
    </svg>
  );
});

export default SurdoRetain;
