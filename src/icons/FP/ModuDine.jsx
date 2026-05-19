import React from 'react';

export const iconData = {
  "id": "ModuDine",
  "name": "ModuDine",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.07 5.60 L 19.65 14.85 L 11.66 20.16 L 4.14 14.19 L 7.48 5.20 Z"
      }
    ]
  ]
};

export const ModuDine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.07 5.60 L 19.65 14.85 L 11.66 20.16 L 4.14 14.19 L 7.48 5.20 Z" />
      {children}
    </svg>
  );
});

export default ModuDine;
