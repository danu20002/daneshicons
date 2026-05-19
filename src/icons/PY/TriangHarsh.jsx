import React from 'react';

export const iconData = {
  "id": "TriangHarsh",
  "name": "TriangHarsh",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.73 19.18 L 7.77 13.72 L 1.78 11.94 L 7.79 10.23 L 4.82 4.73 L 10.28 7.77 L 12.06 1.78 L 13.77 7.79 L 19.27 4.82 L 16.23 10.28 L 22.22 12.06 L 16.21 13.77 L 19.18 19.27 L 13.72 16.23 L 11.94 22.22 L 10.23 16.21 Z"
      }
    ]
  ]
};

export const TriangHarsh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.73 19.18 L 7.77 13.72 L 1.78 11.94 L 7.79 10.23 L 4.82 4.73 L 10.28 7.77 L 12.06 1.78 L 13.77 7.79 L 19.27 4.82 L 16.23 10.28 L 22.22 12.06 L 16.21 13.77 L 19.18 19.27 L 13.72 16.23 L 11.94 22.22 L 10.23 16.21 Z" />
      {children}
    </svg>
  );
});

export default TriangHarsh;
