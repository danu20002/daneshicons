import React from 'react';

export const iconData = {
  "id": "TriangDraft",
  "name": "TriangDraft",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.90 11.25 4.58 10.49 Q 8.56 10.74 12.55 10.99 Q 13.25 11.81 13.96 12.63 Q 16.73 15.01 19.50 17.40 Q 15.55 16.73 11.60 16.07 Q 7.98 15.90 4.35 15.73 Q 6.79 13.87 9.23 12.01 Z"
      }
    ]
  ]
};

export const TriangDraft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.90 11.25 4.58 10.49 Q 8.56 10.74 12.55 10.99 Q 13.25 11.81 13.96 12.63 Q 16.73 15.01 19.50 17.40 Q 15.55 16.73 11.60 16.07 Q 7.98 15.90 4.35 15.73 Q 6.79 13.87 9.23 12.01 Z" />
      {children}
    </svg>
  );
});

export default TriangDraft;
