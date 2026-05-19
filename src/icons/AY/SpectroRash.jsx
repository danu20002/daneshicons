import React from 'react';

export const iconData = {
  "id": "SpectroRash",
  "name": "SpectroRash",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.71 15.99 L 3.57 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 19.41 19.21 L 20.36 21.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.87 2.03 L 5.64 8.88"
      }
    ]
  ]
};

export const SpectroRash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.71 15.99 L 3.57 19.41" />
      <path d="M 19.41 19.21 L 20.36 21.64" />
      <path d="M 8.87 2.03 L 5.64 8.88" />
      {children}
    </svg>
  );
});

export default SpectroRash;
