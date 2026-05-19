import React from 'react';

export const iconData = {
  "id": "SchizoMineral",
  "name": "SchizoMineral",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.85 5.78 L 19.15 5.78 L 19.15 18.22 L 4.85 18.22 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 5.78 L 9.33 1.30 L 23.63 1.30 L 19.15 5.78"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 5.78 L 23.63 1.30 L 23.63 13.74 L 19.15 18.22"
      }
    ]
  ]
};

export const SchizoMineral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.85 5.78 L 19.15 5.78 L 19.15 18.22 L 4.85 18.22 Z" />
      <path d="M 4.85 5.78 L 9.33 1.30 L 23.63 1.30 L 19.15 5.78" />
      <path d="M 19.15 5.78 L 23.63 1.30 L 23.63 13.74 L 19.15 18.22" />
      {children}
    </svg>
  );
});

export default SchizoMineral;
