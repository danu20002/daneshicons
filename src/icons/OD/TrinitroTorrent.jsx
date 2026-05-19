import React from 'react';

export const iconData = {
  "id": "TrinitroTorrent",
  "name": "TrinitroTorrent",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 13.13 L 10.87 21.13 L 2.87 10.87 L 13.13 2.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.61 14.48 L 9.52 17.61 L 6.39 9.52 L 14.48 6.39 Z"
      }
    ]
  ]
};

export const TrinitroTorrent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 13.13 L 10.87 21.13 L 2.87 10.87 L 13.13 2.87 Z" />
      <path d="M 17.61 14.48 L 9.52 17.61 L 6.39 9.52 L 14.48 6.39 Z" />
      {children}
    </svg>
  );
});

export default TrinitroTorrent;
