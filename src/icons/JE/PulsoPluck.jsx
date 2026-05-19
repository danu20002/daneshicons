import React from 'react';

export const iconData = {
  "id": "PulsoPluck",
  "name": "PulsoPluck",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 5.07 L 19.83 5.07 L 19.83 18.93 L 4.17 18.93 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 5.07 L 8.24 1.00 L 23.90 1.00 L 19.83 5.07"
      }
    ],
    [
      "path",
      {
        "d": "M 19.83 5.07 L 23.90 1.00 L 23.90 14.87 L 19.83 18.93"
      }
    ]
  ]
};

export const PulsoPluck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 5.07 L 19.83 5.07 L 19.83 18.93 L 4.17 18.93 Z" />
      <path d="M 4.17 5.07 L 8.24 1.00 L 23.90 1.00 L 19.83 5.07" />
      <path d="M 19.83 5.07 L 23.90 1.00 L 23.90 14.87 L 19.83 18.93" />
      {children}
    </svg>
  );
});

export default PulsoPluck;
