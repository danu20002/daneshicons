import React from 'react';

export const iconData = {
  "id": "SphingoWax",
  "name": "SphingoWax",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.84 0 a 2.42 2.42 0 1 0 -4.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 12.00 a 6.42 6.42 0 1 0 12.84 0 a 6.42 6.42 0 1 0 -12.84 0"
      }
    ]
  ]
};

export const SphingoWax = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.84 0 a 2.42 2.42 0 1 0 -4.84 0" />
      <path d="M 5.58 12.00 a 6.42 6.42 0 1 0 12.84 0 a 6.42 6.42 0 1 0 -12.84 0" />
      {children}
    </svg>
  );
});

export default SphingoWax;
