import React from 'react';

export const iconData = {
  "id": "InkaSample",
  "name": "InkaSample",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.84 2.47 L 21.22 8.28 L 20.66 16.89 L 13.57 21.82 L 5.30 19.35 L 2.08 11.35 L 6.32 3.83 Z"
      }
    ]
  ]
};

export const InkaSample = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.84 2.47 L 21.22 8.28 L 20.66 16.89 L 13.57 21.82 L 5.30 19.35 L 2.08 11.35 L 6.32 3.83 Z" />
      {children}
    </svg>
  );
});

export default InkaSample;
