import React from 'react';

export const iconData = {
  "id": "ZincoOutbreak",
  "name": "ZincoOutbreak",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.53 4.74 L 12.47 2.92 L 18.20 5.35 L 21.02 10.89 L 19.63 16.95 L 14.66 20.69 L 8.45 20.37 L 3.90 16.13 L 3.14 9.96 Z"
      }
    ]
  ]
};

export const ZincoOutbreak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.53 4.74 L 12.47 2.92 L 18.20 5.35 L 21.02 10.89 L 19.63 16.95 L 14.66 20.69 L 8.45 20.37 L 3.90 16.13 L 3.14 9.96 Z" />
      {children}
    </svg>
  );
});

export default ZincoOutbreak;
