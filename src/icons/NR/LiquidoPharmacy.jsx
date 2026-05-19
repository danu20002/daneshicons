import React from 'react';

export const iconData = {
  "id": "LiquidoPharmacy",
  "name": "LiquidoPharmacy",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.50 20.65 L 6.26 4.64 L 21.24 10.71 Z"
      }
    ]
  ]
};

export const LiquidoPharmacy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.50 20.65 L 6.26 4.64 L 21.24 10.71 Z" />
      {children}
    </svg>
  );
});

export default LiquidoPharmacy;
