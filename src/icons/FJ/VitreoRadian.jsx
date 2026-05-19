import React from 'react';

export const iconData = {
  "id": "VitreoRadian",
  "name": "VitreoRadian",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.85 9.57 4.40 6.01 Q 11.61 8.85 18.82 11.69 Q 17.11 12.32 15.40 12.95 Q 14.35 13.04 13.29 13.13 Z"
      }
    ]
  ]
};

export const VitreoRadian = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.85 9.57 4.40 6.01 Q 11.61 8.85 18.82 11.69 Q 17.11 12.32 15.40 12.95 Q 14.35 13.04 13.29 13.13 Z" />
      {children}
    </svg>
  );
});

export default VitreoRadian;
