import React from 'react';

export const iconData = {
  "id": "NeuroFork",
  "name": "NeuroFork",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.79 15.58 A 2.79 3.06 141 0 0 17.33 9.82"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 16.97 L 9.82 8.58 L 16.19 10.60"
      }
    ],
    [
      "path",
      {
        "d": "M 18.56 3.62 L 8.16 17.95 L 14.50 12.69"
      }
    ]
  ]
};

export const NeuroFork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.79 15.58 A 2.79 3.06 141 0 0 17.33 9.82" />
      <path d="M 7.10 16.97 L 9.82 8.58 L 16.19 10.60" />
      <path d="M 18.56 3.62 L 8.16 17.95 L 14.50 12.69" />
      {children}
    </svg>
  );
});

export default NeuroFork;
