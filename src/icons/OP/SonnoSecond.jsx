import React from 'react';

export const iconData = {
  "id": "SonnoSecond",
  "name": "SonnoSecond",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 12.00 a 2.11 2.11 0 1 0 4.22 0 a 2.11 2.11 0 1 0 -4.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 12.00 a 5.15 5.15 0 1 0 10.29 0 a 5.15 5.15 0 1 0 -10.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0"
      }
    ]
  ]
};

export const SonnoSecond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 12.00 a 2.11 2.11 0 1 0 4.22 0 a 2.11 2.11 0 1 0 -4.22 0" />
      <path d="M 6.85 12.00 a 5.15 5.15 0 1 0 10.29 0 a 5.15 5.15 0 1 0 -10.29 0" />
      <path d="M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0" />
      {children}
    </svg>
  );
});

export default SonnoSecond;
