import React from 'react';

export const iconData = {
  "id": "TridenteJob",
  "name": "TridenteJob",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.08 16.73 L 7.90 10.96 L 7.27 4.08 L 13.04 7.90 L 19.92 7.27 L 16.10 13.04 L 16.73 19.92 L 10.96 16.10 Z"
      }
    ]
  ]
};

export const TridenteJob = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.08 16.73 L 7.90 10.96 L 7.27 4.08 L 13.04 7.90 L 19.92 7.27 L 16.10 13.04 L 16.73 19.92 L 10.96 16.10 Z" />
      {children}
    </svg>
  );
});

export default TridenteJob;
