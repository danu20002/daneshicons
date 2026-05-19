import React from 'react';

export const iconData = {
  "id": "VignaPython",
  "name": "VignaPython",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.13 15.00 L 8.10 11.09 L 4.47 4.95 L 10.84 8.17 L 14.34 1.95 L 14.74 9.08 L 21.87 9.00 L 15.90 12.91 L 19.53 19.05 L 13.16 15.83 L 9.66 22.05 L 9.26 14.92 Z"
      }
    ]
  ]
};

export const VignaPython = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.13 15.00 L 8.10 11.09 L 4.47 4.95 L 10.84 8.17 L 14.34 1.95 L 14.74 9.08 L 21.87 9.00 L 15.90 12.91 L 19.53 19.05 L 13.16 15.83 L 9.66 22.05 L 9.26 14.92 Z" />
      {children}
    </svg>
  );
});

export default VignaPython;
