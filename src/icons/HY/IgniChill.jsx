import React from 'react';

export const iconData = {
  "id": "IgniChill",
  "name": "IgniChill",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.96 4.77 L 16.83 10.20 L 21.24 13.55 L 15.97 15.28 L 15.28 20.78 L 11.15 17.08 L 6.04 19.23 L 7.17 13.80 L 2.76 10.45 L 8.03 8.72 L 8.72 3.22 L 12.85 6.92 Z"
      }
    ]
  ]
};

export const IgniChill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.96 4.77 L 16.83 10.20 L 21.24 13.55 L 15.97 15.28 L 15.28 20.78 L 11.15 17.08 L 6.04 19.23 L 7.17 13.80 L 2.76 10.45 L 8.03 8.72 L 8.72 3.22 L 12.85 6.92 Z" />
      {children}
    </svg>
  );
});

export default IgniChill;
