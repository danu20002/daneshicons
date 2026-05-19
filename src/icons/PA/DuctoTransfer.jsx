import React from 'react';

export const iconData = {
  "id": "DuctoTransfer",
  "name": "DuctoTransfer",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 5.50 L 20.97 5.50 L 20.97 18.50 L 3.03 18.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 5.50 L 8.00 0.53 L 25.95 0.53 L 20.97 5.50"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 5.50 L 25.95 0.53 L 25.95 13.53 L 20.97 18.50"
      }
    ]
  ]
};

export const DuctoTransfer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 5.50 L 20.97 5.50 L 20.97 18.50 L 3.03 18.50 Z" />
      <path d="M 3.03 5.50 L 8.00 0.53 L 25.95 0.53 L 20.97 5.50" />
      <path d="M 20.97 5.50 L 25.95 0.53 L 25.95 13.53 L 20.97 18.50" />
      {children}
    </svg>
  );
});

export default DuctoTransfer;
