import React from 'react';

export const iconData = {
  "id": "LattroCobra",
  "name": "LattroCobra",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.71 18.65 L 3.55 12.96 L 5.35 6.71 L 11.04 3.55 L 17.29 5.35 L 20.45 11.04 L 18.65 17.29 L 12.96 20.45 Z"
      }
    ]
  ]
};

export const LattroCobra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.71 18.65 L 3.55 12.96 L 5.35 6.71 L 11.04 3.55 L 17.29 5.35 L 20.45 11.04 L 18.65 17.29 L 12.96 20.45 Z" />
      {children}
    </svg>
  );
});

export default LattroCobra;
