import React from 'react';

export const iconData = {
  "id": "FissioFirm",
  "name": "FissioFirm",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 6.82 L 10.04 9.06 L 10.60 1.94 L 13.08 8.63 L 18.99 4.63 L 15.31 10.74 L 22.12 12.87 L 15.04 13.80 L 17.63 20.45 L 12.49 15.50 L 8.90 21.67 L 9.57 14.57 L 2.51 15.61 L 8.48 11.70 Z"
      }
    ]
  ]
};

export const FissioFirm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 6.82 L 10.04 9.06 L 10.60 1.94 L 13.08 8.63 L 18.99 4.63 L 15.31 10.74 L 22.12 12.87 L 15.04 13.80 L 17.63 20.45 L 12.49 15.50 L 8.90 21.67 L 9.57 14.57 L 2.51 15.61 L 8.48 11.70 Z" />
      {children}
    </svg>
  );
});

export default FissioFirm;
