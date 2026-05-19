import React from 'react';

export const iconData = {
  "id": "MisoRustic",
  "name": "MisoRustic",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 6.17 L 19.47 6.17 L 19.47 17.83 L 4.53 17.83 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 6.17 L 8.00 2.70 L 22.93 2.70 L 19.47 6.17"
      }
    ],
    [
      "path",
      {
        "d": "M 19.47 6.17 L 22.93 2.70 L 22.93 14.37 L 19.47 17.83"
      }
    ]
  ]
};

export const MisoRustic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 6.17 L 19.47 6.17 L 19.47 17.83 L 4.53 17.83 Z" />
      <path d="M 4.53 6.17 L 8.00 2.70 L 22.93 2.70 L 19.47 6.17" />
      <path d="M 19.47 6.17 L 22.93 2.70 L 22.93 14.37 L 19.47 17.83" />
      {children}
    </svg>
  );
});

export default MisoRustic;
