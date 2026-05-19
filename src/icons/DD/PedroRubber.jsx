import React from 'react';

export const iconData = {
  "id": "PedroRubber",
  "name": "PedroRubber",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.71 20.93 A 5.90 3.81 64 0 1 4.92 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 15.55 L 2.12 5.76"
      }
    ],
    [
      "path",
      {
        "d": "M 16.35 2.45 C 5.16 15.77, 10.39 15.62, 18.28 15.95"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 4.10 L 2.04 8.96"
      }
    ]
  ]
};

export const PedroRubber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.71 20.93 A 5.90 3.81 64 0 1 4.92 21.26" />
      <path d="M 4.10 15.55 L 2.12 5.76" />
      <path d="M 16.35 2.45 C 5.16 15.77, 10.39 15.62, 18.28 15.95" />
      <path d="M 4.97 4.10 L 2.04 8.96" />
      {children}
    </svg>
  );
});

export default PedroRubber;
