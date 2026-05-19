import React from 'react';

export const iconData = {
  "id": "MembraFall",
  "name": "MembraFall",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 5.12 L 20.43 5.12 L 20.43 18.88 L 3.57 18.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 5.12 L 8.54 0.14 L 25.41 0.14 L 20.43 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 20.43 5.12 L 25.41 0.14 L 25.41 13.90 L 20.43 18.88"
      }
    ]
  ]
};

export const MembraFall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 5.12 L 20.43 5.12 L 20.43 18.88 L 3.57 18.88 Z" />
      <path d="M 3.57 5.12 L 8.54 0.14 L 25.41 0.14 L 20.43 5.12" />
      <path d="M 20.43 5.12 L 25.41 0.14 L 25.41 13.90 L 20.43 18.88" />
      {children}
    </svg>
  );
});

export default MembraFall;
