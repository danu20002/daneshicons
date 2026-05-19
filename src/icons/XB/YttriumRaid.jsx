import React from 'react';

export const iconData = {
  "id": "YttriumRaid",
  "name": "YttriumRaid",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.10 5.15 L 19.90 5.15 L 19.90 18.85 L 4.10 18.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 5.15 L 8.04 1.21 L 23.84 1.21 L 19.90 5.15"
      }
    ],
    [
      "path",
      {
        "d": "M 19.90 5.15 L 23.84 1.21 L 23.84 14.91 L 19.90 18.85"
      }
    ]
  ]
};

export const YttriumRaid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.10 5.15 L 19.90 5.15 L 19.90 18.85 L 4.10 18.85 Z" />
      <path d="M 4.10 5.15 L 8.04 1.21 L 23.84 1.21 L 19.90 5.15" />
      <path d="M 19.90 5.15 L 23.84 1.21 L 23.84 14.91 L 19.90 18.85" />
      {children}
    </svg>
  );
});

export default YttriumRaid;
