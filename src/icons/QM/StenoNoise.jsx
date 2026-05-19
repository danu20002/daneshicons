import React from 'react';

export const iconData = {
  "id": "StenoNoise",
  "name": "StenoNoise",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 5.95 L 19.33 5.95 L 19.33 18.05 L 4.67 18.05 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 5.95 L 9.35 1.27 L 24.02 1.27 L 19.33 5.95"
      }
    ],
    [
      "path",
      {
        "d": "M 19.33 5.95 L 24.02 1.27 L 24.02 13.37 L 19.33 18.05"
      }
    ]
  ]
};

export const StenoNoise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 5.95 L 19.33 5.95 L 19.33 18.05 L 4.67 18.05 Z" />
      <path d="M 4.67 5.95 L 9.35 1.27 L 24.02 1.27 L 19.33 5.95" />
      <path d="M 19.33 5.95 L 24.02 1.27 L 24.02 13.37 L 19.33 18.05" />
      {children}
    </svg>
  );
});

export default StenoNoise;
