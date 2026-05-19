import React from 'react';

export const iconData = {
  "id": "TriploSatisfy",
  "name": "TriploSatisfy",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.35 12.18 L 16.52 20.19 L 7.17 20.01 L 2.65 11.82 L 7.48 3.81 L 16.83 3.99 Z"
      }
    ]
  ]
};

export const TriploSatisfy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.35 12.18 L 16.52 20.19 L 7.17 20.01 L 2.65 11.82 L 7.48 3.81 L 16.83 3.99 Z" />
      {children}
    </svg>
  );
});

export default TriploSatisfy;
