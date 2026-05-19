import React from 'react';

export const iconData = {
  "id": "QuantFlair",
  "name": "QuantFlair",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.89 21.21 L 7.82 16.08 L 2.79 11.89 L 7.92 7.82 L 12.11 2.79 L 16.18 7.92 L 21.21 12.11 L 16.08 16.18 Z"
      }
    ]
  ]
};

export const QuantFlair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.89 21.21 L 7.82 16.08 L 2.79 11.89 L 7.92 7.82 L 12.11 2.79 L 16.18 7.92 L 21.21 12.11 L 16.08 16.18 Z" />
      {children}
    </svg>
  );
});

export default QuantFlair;
