import React from 'react';

export const iconData = {
  "id": "ViaggioSculpt",
  "name": "ViaggioSculpt",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.97 19.15 L 2.79 10.35 L 8.82 3.20 L 18.03 4.85 L 21.21 13.65 L 15.18 20.80 Z"
      }
    ]
  ]
};

export const ViaggioSculpt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.97 19.15 L 2.79 10.35 L 8.82 3.20 L 18.03 4.85 L 21.21 13.65 L 15.18 20.80 Z" />
      {children}
    </svg>
  );
});

export default ViaggioSculpt;
