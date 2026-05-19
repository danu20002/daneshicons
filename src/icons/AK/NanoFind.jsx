import React from 'react';

export const iconData = {
  "id": "NanoFind",
  "name": "NanoFind",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 6.27 L 20.59 6.27 L 20.59 17.73 L 3.41 17.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 6.27 L 6.56 3.12 L 23.74 3.12 L 20.59 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.59 6.27 L 23.74 3.12 L 23.74 14.58 L 20.59 17.73"
      }
    ]
  ]
};

export const NanoFind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 6.27 L 20.59 6.27 L 20.59 17.73 L 3.41 17.73 Z" />
      <path d="M 3.41 6.27 L 6.56 3.12 L 23.74 3.12 L 20.59 6.27" />
      <path d="M 20.59 6.27 L 23.74 3.12 L 23.74 14.58 L 20.59 17.73" />
      {children}
    </svg>
  );
});

export default NanoFind;
