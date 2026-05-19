import React from 'react';

export const iconData = {
  "id": "TornadoPure",
  "name": "TornadoPure",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.62 10.58 L 8.80 9.52 L 8.04 2.30 L 12.55 7.99 L 18.42 3.72 L 15.75 10.47 L 22.38 13.42 L 15.20 14.48 L 15.96 21.70 L 11.45 16.01 L 5.58 20.28 L 8.25 13.53 Z"
      }
    ]
  ]
};

export const TornadoPure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.62 10.58 L 8.80 9.52 L 8.04 2.30 L 12.55 7.99 L 18.42 3.72 L 15.75 10.47 L 22.38 13.42 L 15.20 14.48 L 15.96 21.70 L 11.45 16.01 L 5.58 20.28 L 8.25 13.53 Z" />
      {children}
    </svg>
  );
});

export default TornadoPure;
