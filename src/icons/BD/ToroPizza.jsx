import React from 'react';

export const iconData = {
  "id": "ToroPizza",
  "name": "ToroPizza",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 5.12 L 20.15 5.12 L 20.15 18.88 L 3.85 18.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 5.12 L 7.97 1.00 L 24.27 1.00 L 20.15 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 20.15 5.12 L 24.27 1.00 L 24.27 14.76 L 20.15 18.88"
      }
    ]
  ]
};

export const ToroPizza = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 5.12 L 20.15 5.12 L 20.15 18.88 L 3.85 18.88 Z" />
      <path d="M 3.85 5.12 L 7.97 1.00 L 24.27 1.00 L 20.15 5.12" />
      <path d="M 20.15 5.12 L 24.27 1.00 L 24.27 14.76 L 20.15 18.88" />
      {children}
    </svg>
  );
});

export default ToroPizza;
