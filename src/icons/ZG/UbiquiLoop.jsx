import React from 'react';

export const iconData = {
  "id": "UbiquiLoop",
  "name": "UbiquiLoop",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 6.82 L 19.36 6.82 L 19.36 17.18 L 4.64 17.18 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 6.82 L 8.90 2.56 L 23.62 2.56 L 19.36 6.82"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 6.82 L 23.62 2.56 L 23.62 12.92 L 19.36 17.18"
      }
    ]
  ]
};

export const UbiquiLoop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 6.82 L 19.36 6.82 L 19.36 17.18 L 4.64 17.18 Z" />
      <path d="M 4.64 6.82 L 8.90 2.56 L 23.62 2.56 L 19.36 6.82" />
      <path d="M 19.36 6.82 L 23.62 2.56 L 23.62 12.92 L 19.36 17.18" />
      {children}
    </svg>
  );
});

export default UbiquiLoop;
