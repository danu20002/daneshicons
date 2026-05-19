import React from 'react';

export const iconData = {
  "id": "SynoComb",
  "name": "SynoComb",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 6.95 L 19.04 6.95 L 19.04 17.05 L 4.96 17.05 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 6.95 L 9.43 2.48 L 23.50 2.48 L 19.04 6.95"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 6.95 L 23.50 2.48 L 23.50 12.59 L 19.04 17.05"
      }
    ]
  ]
};

export const SynoComb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 6.95 L 19.04 6.95 L 19.04 17.05 L 4.96 17.05 Z" />
      <path d="M 4.96 6.95 L 9.43 2.48 L 23.50 2.48 L 19.04 6.95" />
      <path d="M 19.04 6.95 L 23.50 2.48 L 23.50 12.59 L 19.04 17.05" />
      {children}
    </svg>
  );
});

export default SynoComb;
