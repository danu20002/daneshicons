import React from 'react';

export const iconData = {
  "id": "GranoTram",
  "name": "GranoTram",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.94 3.76 L 15.35 10.82 L 20.24 15.94 L 13.18 15.35 L 8.06 20.24 L 8.65 13.18 L 3.76 8.06 L 10.82 8.65 Z"
      }
    ]
  ]
};

export const GranoTram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.94 3.76 L 15.35 10.82 L 20.24 15.94 L 13.18 15.35 L 8.06 20.24 L 8.65 13.18 L 3.76 8.06 L 10.82 8.65 Z" />
      {children}
    </svg>
  );
});

export default GranoTram;
