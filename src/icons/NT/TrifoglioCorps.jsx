import React from 'react';

export const iconData = {
  "id": "TrifoglioCorps",
  "name": "TrifoglioCorps",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 6.99 L 8.91 8.08 L 9.21 2.13 L 12.59 7.04 L 17.01 3.05 L 15.92 8.91 L 21.87 9.21 L 16.96 12.59 L 20.95 17.01 L 15.09 15.92 L 14.79 21.87 L 11.41 16.96 L 6.99 20.95 L 8.08 15.09 L 2.13 14.79 L 7.04 11.41 Z"
      }
    ]
  ]
};

export const TrifoglioCorps = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 6.99 L 8.91 8.08 L 9.21 2.13 L 12.59 7.04 L 17.01 3.05 L 15.92 8.91 L 21.87 9.21 L 16.96 12.59 L 20.95 17.01 L 15.09 15.92 L 14.79 21.87 L 11.41 16.96 L 6.99 20.95 L 8.08 15.09 L 2.13 14.79 L 7.04 11.41 Z" />
      {children}
    </svg>
  );
});

export default TrifoglioCorps;
