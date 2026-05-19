import React from 'react';

export const iconData = {
  "id": "ScannoFungus",
  "name": "ScannoFungus",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.14 3.49 L 13.88 7.14 L 22.80 10.31 L 15.27 16.06 L 8.06 22.20 L 6.85 12.81 Z"
      }
    ]
  ]
};

export const ScannoFungus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.14 3.49 L 13.88 7.14 L 22.80 10.31 L 15.27 16.06 L 8.06 22.20 L 6.85 12.81 Z" />
      {children}
    </svg>
  );
});

export default ScannoFungus;
