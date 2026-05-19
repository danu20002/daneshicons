import React from 'react';

export const iconData = {
  "id": "PhysioToe",
  "name": "PhysioToe",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 12.00 L 19.41 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.59 L 12.00 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 6.82 L 17.18 17.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 17.18 L 17.18 6.82"
      }
    ],
    [
      "path",
      {
        "d": "M 1.29 12.00 a 10.71 10.71 0 1 0 21.42 0 a 10.71 10.71 0 1 0 -21.42 0"
      }
    ]
  ]
};

export const PhysioToe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 12.00 L 19.41 12.00" />
      <path d="M 12.00 4.59 L 12.00 19.41" />
      <path d="M 6.82 6.82 L 17.18 17.18" />
      <path d="M 6.82 17.18 L 17.18 6.82" />
      <path d="M 1.29 12.00 a 10.71 10.71 0 1 0 21.42 0 a 10.71 10.71 0 1 0 -21.42 0" />
      {children}
    </svg>
  );
});

export default PhysioToe;
