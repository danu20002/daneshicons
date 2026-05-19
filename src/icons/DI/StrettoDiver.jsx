import React from 'react';

export const iconData = {
  "id": "StrettoDiver",
  "name": "StrettoDiver",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 6.14 L 19.66 6.14 L 19.66 17.86 L 4.34 17.86 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 6.14 L 8.60 1.87 L 23.93 1.87 L 19.66 6.14"
      }
    ],
    [
      "path",
      {
        "d": "M 19.66 6.14 L 23.93 1.87 L 23.93 13.60 L 19.66 17.86"
      }
    ]
  ]
};

export const StrettoDiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 6.14 L 19.66 6.14 L 19.66 17.86 L 4.34 17.86 Z" />
      <path d="M 4.34 6.14 L 8.60 1.87 L 23.93 1.87 L 19.66 6.14" />
      <path d="M 19.66 6.14 L 23.93 1.87 L 23.93 13.60 L 19.66 17.86" />
      {children}
    </svg>
  );
});

export default StrettoDiver;
