import React from 'react';

export const iconData = {
  "id": "StatoExamine",
  "name": "StatoExamine",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.87 6.55 L 19.13 6.55 L 19.13 17.45 L 4.87 17.45 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 6.55 L 9.45 1.98 L 23.70 1.98 L 19.13 6.55"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 6.55 L 23.70 1.98 L 23.70 12.87 L 19.13 17.45"
      }
    ]
  ]
};

export const StatoExamine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.87 6.55 L 19.13 6.55 L 19.13 17.45 L 4.87 17.45 Z" />
      <path d="M 4.87 6.55 L 9.45 1.98 L 23.70 1.98 L 19.13 6.55" />
      <path d="M 19.13 6.55 L 23.70 1.98 L 23.70 12.87 L 19.13 17.45" />
      {children}
    </svg>
  );
});

export default StatoExamine;
