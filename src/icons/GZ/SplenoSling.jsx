import React from 'react';

export const iconData = {
  "id": "SplenoSling",
  "name": "SplenoSling",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 6.73 L 19.54 6.73 L 19.54 17.27 L 4.46 17.27 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 6.73 L 9.00 2.19 L 24.09 2.19 L 19.54 6.73"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 6.73 L 24.09 2.19 L 24.09 12.72 L 19.54 17.27"
      }
    ]
  ]
};

export const SplenoSling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 6.73 L 19.54 6.73 L 19.54 17.27 L 4.46 17.27 Z" />
      <path d="M 4.46 6.73 L 9.00 2.19 L 24.09 2.19 L 19.54 6.73" />
      <path d="M 19.54 6.73 L 24.09 2.19 L 24.09 12.72 L 19.54 17.27" />
      {children}
    </svg>
  );
});

export default SplenoSling;
