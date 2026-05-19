import React from 'react';

export const iconData = {
  "id": "BlastPurple",
  "name": "BlastPurple",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.54 9.10 L 16.80 13.25 L 19.78 19.68 L 13.32 16.78 L 9.24 22.58 L 8.51 15.53 L 1.46 14.90 L 7.20 10.75 L 4.22 4.32 L 10.68 7.22 L 14.76 1.42 L 15.49 8.47 Z"
      }
    ]
  ]
};

export const BlastPurple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.54 9.10 L 16.80 13.25 L 19.78 19.68 L 13.32 16.78 L 9.24 22.58 L 8.51 15.53 L 1.46 14.90 L 7.20 10.75 L 4.22 4.32 L 10.68 7.22 L 14.76 1.42 L 15.49 8.47 Z" />
      {children}
    </svg>
  );
});

export default BlastPurple;
