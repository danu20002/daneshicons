import React from 'react';

export const iconData = {
  "id": "SeptiLimb",
  "name": "SeptiLimb",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.32 10.10 L 15.10 13.10 L 18.80 19.99 L 12.60 15.24 L 8.48 21.88 L 9.49 14.14 L 1.68 13.90 L 8.90 10.90 L 5.20 4.01 L 11.40 8.76 L 15.52 2.12 L 14.51 9.86 Z"
      }
    ]
  ]
};

export const SeptiLimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.32 10.10 L 15.10 13.10 L 18.80 19.99 L 12.60 15.24 L 8.48 21.88 L 9.49 14.14 L 1.68 13.90 L 8.90 10.90 L 5.20 4.01 L 11.40 8.76 L 15.52 2.12 L 14.51 9.86 Z" />
      {children}
    </svg>
  );
});

export default SeptiLimb;
