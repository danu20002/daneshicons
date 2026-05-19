import React from 'react';

export const iconData = {
  "id": "VedovoHistory",
  "name": "VedovoHistory",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.58 13.71 L 13.92 17.31 L 5.73 19.44 L 6.45 11.01 L 8.69 2.85 L 15.64 7.69 Z"
      }
    ]
  ]
};

export const VedovoHistory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.58 13.71 L 13.92 17.31 L 5.73 19.44 L 6.45 11.01 L 8.69 2.85 L 15.64 7.69 Z" />
      {children}
    </svg>
  );
});

export default VedovoHistory;
