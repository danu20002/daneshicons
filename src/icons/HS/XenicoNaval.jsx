import React from 'react';

export const iconData = {
  "id": "XenicoNaval",
  "name": "XenicoNaval",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 6.11 L 19.18 6.11 L 19.18 17.89 L 4.82 17.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 6.11 L 9.59 1.34 L 23.95 1.34 L 19.18 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 6.11 L 23.95 1.34 L 23.95 13.12 L 19.18 17.89"
      }
    ]
  ]
};

export const XenicoNaval = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 6.11 L 19.18 6.11 L 19.18 17.89 L 4.82 17.89 Z" />
      <path d="M 4.82 6.11 L 9.59 1.34 L 23.95 1.34 L 19.18 6.11" />
      <path d="M 19.18 6.11 L 23.95 1.34 L 23.95 13.12 L 19.18 17.89" />
      {children}
    </svg>
  );
});

export default XenicoNaval;
