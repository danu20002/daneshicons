import React from 'react';

export const iconData = {
  "id": "ClinoPurchase",
  "name": "ClinoPurchase",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.64 22.22 L 11.28 15.94 L 4.97 20.27 L 8.23 13.35 L 1.32 10.04 L 8.95 9.40 L 8.36 1.78 L 12.72 8.06 L 19.03 3.73 L 15.77 10.65 L 22.68 13.96 L 15.05 14.60 Z"
      }
    ]
  ]
};

export const ClinoPurchase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.64 22.22 L 11.28 15.94 L 4.97 20.27 L 8.23 13.35 L 1.32 10.04 L 8.95 9.40 L 8.36 1.78 L 12.72 8.06 L 19.03 3.73 L 15.77 10.65 L 22.68 13.96 L 15.05 14.60 Z" />
      {children}
    </svg>
  );
});

export default ClinoPurchase;
