import React from 'react';

export const iconData = {
  "id": "VateRefine",
  "name": "VateRefine",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.15 7.22 L 15.07 12.13 L 20.71 17.53 L 13.42 14.72 L 11.56 22.31 L 10.35 14.59 L 2.85 16.78 L 8.93 11.87 L 3.29 6.47 L 10.58 9.28 L 12.44 1.69 L 13.65 9.41 Z"
      }
    ]
  ]
};

export const VateRefine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.15 7.22 L 15.07 12.13 L 20.71 17.53 L 13.42 14.72 L 11.56 22.31 L 10.35 14.59 L 2.85 16.78 L 8.93 11.87 L 3.29 6.47 L 10.58 9.28 L 12.44 1.69 L 13.65 9.41 Z" />
      {children}
    </svg>
  );
});

export default VateRefine;
