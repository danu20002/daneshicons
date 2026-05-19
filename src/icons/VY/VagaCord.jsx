import React from 'react';

export const iconData = {
  "id": "VagaCord",
  "name": "VagaCord",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.96 8.76 C 19.47 8.10, 10.80 4.69, 19.94 15.67"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 5.98 C 14.57 5.90, 17.71 10.99, 21.67 16.95"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 7.13 C 5.84 4.18, 9.28 11.55, 14.80 19.37"
      }
    ]
  ]
};

export const VagaCord = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.96 8.76 C 19.47 8.10, 10.80 4.69, 19.94 15.67" />
      <path d="M 6.24 5.98 C 14.57 5.90, 17.71 10.99, 21.67 16.95" />
      <path d="M 6.45 7.13 C 5.84 4.18, 9.28 11.55, 14.80 19.37" />
      {children}
    </svg>
  );
});

export default VagaCord;
