import React from 'react';

export const iconData = {
  "id": "VerdeStrong",
  "name": "VerdeStrong",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 6.01 L 20.40 6.01 L 20.40 17.99 L 3.60 17.99 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 6.01 L 8.13 1.47 L 24.94 1.47 L 20.40 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 20.40 6.01 L 24.94 1.47 L 24.94 13.46 L 20.40 17.99"
      }
    ]
  ]
};

export const VerdeStrong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 6.01 L 20.40 6.01 L 20.40 17.99 L 3.60 17.99 Z" />
      <path d="M 3.60 6.01 L 8.13 1.47 L 24.94 1.47 L 20.40 6.01" />
      <path d="M 20.40 6.01 L 24.94 1.47 L 24.94 13.46 L 20.40 17.99" />
      {children}
    </svg>
  );
});

export default VerdeStrong;
