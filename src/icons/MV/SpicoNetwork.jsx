import React from 'react';

export const iconData = {
  "id": "SpicoNetwork",
  "name": "SpicoNetwork",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 5.66 L 20.57 5.66 L 20.57 18.34 L 3.43 18.34 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 5.66 L 7.30 1.79 L 24.45 1.79 L 20.57 5.66"
      }
    ],
    [
      "path",
      {
        "d": "M 20.57 5.66 L 24.45 1.79 L 24.45 14.46 L 20.57 18.34"
      }
    ]
  ]
};

export const SpicoNetwork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 5.66 L 20.57 5.66 L 20.57 18.34 L 3.43 18.34 Z" />
      <path d="M 3.43 5.66 L 7.30 1.79 L 24.45 1.79 L 20.57 5.66" />
      <path d="M 20.57 5.66 L 24.45 1.79 L 24.45 14.46 L 20.57 18.34" />
      {children}
    </svg>
  );
});

export default SpicoNetwork;
