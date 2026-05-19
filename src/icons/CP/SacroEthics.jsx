import React from 'react';

export const iconData = {
  "id": "SacroEthics",
  "name": "SacroEthics",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 5.24 L 19.36 5.24 L 19.36 18.76 L 4.64 18.76 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 5.24 L 8.75 1.13 L 23.47 1.13 L 19.36 5.24"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 5.24 L 23.47 1.13 L 23.47 14.65 L 19.36 18.76"
      }
    ]
  ]
};

export const SacroEthics = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 5.24 L 19.36 5.24 L 19.36 18.76 L 4.64 18.76 Z" />
      <path d="M 4.64 5.24 L 8.75 1.13 L 23.47 1.13 L 19.36 5.24" />
      <path d="M 19.36 5.24 L 23.47 1.13 L 23.47 14.65 L 19.36 18.76" />
      {children}
    </svg>
  );
});

export default SacroEthics;
