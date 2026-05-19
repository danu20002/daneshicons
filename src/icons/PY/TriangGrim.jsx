import React from 'react';

export const iconData = {
  "id": "TriangGrim",
  "name": "TriangGrim",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.00 7.70 L 16.96 13.98 L 16.30 22.00 L 10.02 16.96 L 2.00 16.30 L 7.04 10.02 L 7.70 2.00 L 13.98 7.04 Z"
      }
    ]
  ]
};

export const TriangGrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.00 7.70 L 16.96 13.98 L 16.30 22.00 L 10.02 16.96 L 2.00 16.30 L 7.04 10.02 L 7.70 2.00 L 13.98 7.04 Z" />
      {children}
    </svg>
  );
});

export default TriangGrim;
