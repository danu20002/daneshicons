import React from 'react';

export const iconData = {
  "id": "OzoEgg",
  "name": "OzoEgg",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 6.28 L 19.64 6.28 L 19.64 17.72 L 4.36 17.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 6.28 L 8.49 2.14 L 23.78 2.14 L 19.64 6.28"
      }
    ],
    [
      "path",
      {
        "d": "M 19.64 6.28 L 23.78 2.14 L 23.78 13.59 L 19.64 17.72"
      }
    ]
  ]
};

export const OzoEgg = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 6.28 L 19.64 6.28 L 19.64 17.72 L 4.36 17.72 Z" />
      <path d="M 4.36 6.28 L 8.49 2.14 L 23.78 2.14 L 19.64 6.28" />
      <path d="M 19.64 6.28 L 23.78 2.14 L 23.78 13.59 L 19.64 17.72" />
      {children}
    </svg>
  );
});

export default OzoEgg;
