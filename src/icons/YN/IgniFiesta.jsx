import React from 'react';

export const iconData = {
  "id": "IgniFiesta",
  "name": "IgniFiesta",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.52 6.79 L 19.48 6.79 L 19.48 17.21 L 4.52 17.21 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 6.79 L 8.90 2.41 L 23.87 2.41 L 19.48 6.79"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 6.79 L 23.87 2.41 L 23.87 12.82 L 19.48 17.21"
      }
    ]
  ]
};

export const IgniFiesta = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.52 6.79 L 19.48 6.79 L 19.48 17.21 L 4.52 17.21 Z" />
      <path d="M 4.52 6.79 L 8.90 2.41 L 23.87 2.41 L 19.48 6.79" />
      <path d="M 19.48 6.79 L 23.87 2.41 L 23.87 12.82 L 19.48 17.21" />
      {children}
    </svg>
  );
});

export default IgniFiesta;
