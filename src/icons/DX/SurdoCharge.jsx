import React from 'react';

export const iconData = {
  "id": "SurdoCharge",
  "name": "SurdoCharge",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.16 11.41 3.74 7.03 Q 7.52 7.04 11.31 7.06 Q 15.90 8.85 20.49 10.65 Q 15.54 13.22 10.58 15.80 Z"
      }
    ]
  ]
};

export const SurdoCharge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.16 11.41 3.74 7.03 Q 7.52 7.04 11.31 7.06 Q 15.90 8.85 20.49 10.65 Q 15.54 13.22 10.58 15.80 Z" />
      {children}
    </svg>
  );
});

export default SurdoCharge;
