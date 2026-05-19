import React from 'react';

export const iconData = {
  "id": "TormentoBrace",
  "name": "TormentoBrace",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.87 19.90 L 8.23 19.95 L 3.44 14.01 L 5.09 6.56 L 11.94 3.20 L 18.84 6.47 L 20.59 13.90 Z"
      }
    ]
  ]
};

export const TormentoBrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.87 19.90 L 8.23 19.95 L 3.44 14.01 L 5.09 6.56 L 11.94 3.20 L 18.84 6.47 L 20.59 13.90 Z" />
      {children}
    </svg>
  );
});

export default TormentoBrace;
