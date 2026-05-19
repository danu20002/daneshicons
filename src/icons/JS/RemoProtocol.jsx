import React from 'react';

export const iconData = {
  "id": "RemoProtocol",
  "name": "RemoProtocol",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.91 13.81 L 8.21 6.25"
      }
    ],
    [
      "path",
      {
        "d": "M 11.79 14.64 L 14.87 16.70 L 5.15 11.33 L 14.01 19.12 L 20.64 7.98 L 21.00 16.45 L 15.23 6.95"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 12.75 Q 7.73 21.24 8.55 14.97"
      }
    ]
  ]
};

export const RemoProtocol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.91 13.81 L 8.21 6.25" />
      <path d="M 11.79 14.64 L 14.87 16.70 L 5.15 11.33 L 14.01 19.12 L 20.64 7.98 L 21.00 16.45 L 15.23 6.95" />
      <path d="M 8.67 12.75 Q 7.73 21.24 8.55 14.97" />
      {children}
    </svg>
  );
});

export default RemoProtocol;
