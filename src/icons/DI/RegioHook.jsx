import React from 'react';

export const iconData = {
  "id": "RegioHook",
  "name": "RegioHook",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 5.81 L 19.34 5.81 L 19.34 18.19 L 4.66 18.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 5.81 L 9.26 1.21 L 23.94 1.21 L 19.34 5.81"
      }
    ],
    [
      "path",
      {
        "d": "M 19.34 5.81 L 23.94 1.21 L 23.94 13.59 L 19.34 18.19"
      }
    ]
  ]
};

export const RegioHook = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 5.81 L 19.34 5.81 L 19.34 18.19 L 4.66 18.19 Z" />
      <path d="M 4.66 5.81 L 9.26 1.21 L 23.94 1.21 L 19.34 5.81" />
      <path d="M 19.34 5.81 L 23.94 1.21 L 23.94 13.59 L 19.34 18.19" />
      {children}
    </svg>
  );
});

export default RegioHook;
