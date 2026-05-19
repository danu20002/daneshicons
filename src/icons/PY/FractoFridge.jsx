import React from 'react';

export const iconData = {
  "id": "FractoFridge",
  "name": "FractoFridge",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.95 19.01 L 12.71 16.61 L 7.48 20.77 L 7.84 14.10 L 2.26 10.41 L 8.72 8.69 L 10.50 2.25 L 14.13 7.86 L 20.81 7.56 L 16.60 12.75 Z"
      }
    ]
  ]
};

export const FractoFridge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.95 19.01 L 12.71 16.61 L 7.48 20.77 L 7.84 14.10 L 2.26 10.41 L 8.72 8.69 L 10.50 2.25 L 14.13 7.86 L 20.81 7.56 L 16.60 12.75 Z" />
      {children}
    </svg>
  );
});

export default FractoFridge;
