import React from 'react';

export const iconData = {
  "id": "RhizoZip",
  "name": "RhizoZip",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 5.83 L 19.87 5.83 L 19.87 18.17 L 4.13 18.17 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 5.83 L 7.17 2.79 L 22.91 2.79 L 19.87 5.83"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 5.83 L 22.91 2.79 L 22.91 15.13 L 19.87 18.17"
      }
    ]
  ]
};

export const RhizoZip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 5.83 L 19.87 5.83 L 19.87 18.17 L 4.13 18.17 Z" />
      <path d="M 4.13 5.83 L 7.17 2.79 L 22.91 2.79 L 19.87 5.83" />
      <path d="M 19.87 5.83 L 22.91 2.79 L 22.91 15.13 L 19.87 18.17" />
      {children}
    </svg>
  );
});

export default RhizoZip;
