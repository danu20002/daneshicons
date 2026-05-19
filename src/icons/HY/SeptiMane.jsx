import React from 'react';

export const iconData = {
  "id": "SeptiMane",
  "name": "SeptiMane",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.10 1.47 L 15.86 8.21 L 22.53 12.10 L 15.79 15.86 L 11.90 22.53 L 8.14 15.79 L 1.47 11.90 L 8.21 8.14 Z"
      }
    ]
  ]
};

export const SeptiMane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.10 1.47 L 15.86 8.21 L 22.53 12.10 L 15.79 15.86 L 11.90 22.53 L 8.14 15.79 L 1.47 11.90 L 8.21 8.14 Z" />
      {children}
    </svg>
  );
});

export default SeptiMane;
