import React from 'react';

export const iconData = {
  "id": "VisoreChunk",
  "name": "VisoreChunk",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.08 21.35 L 8.43 14.35 L 2.65 10.08 L 9.65 8.43 L 13.92 2.65 L 15.57 9.65 L 21.35 13.92 L 14.35 15.57 Z"
      }
    ]
  ]
};

export const VisoreChunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.08 21.35 L 8.43 14.35 L 2.65 10.08 L 9.65 8.43 L 13.92 2.65 L 15.57 9.65 L 21.35 13.92 L 14.35 15.57 Z" />
      {children}
    </svg>
  );
});

export default VisoreChunk;
