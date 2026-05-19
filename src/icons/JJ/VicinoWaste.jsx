import React from 'react';

export const iconData = {
  "id": "VicinoWaste",
  "name": "VicinoWaste",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 1.81 L 13.08 6.54 L 17.76 3.35 L 16.63 8.90 L 22.19 9.96 L 17.46 13.08 L 20.65 17.76 L 15.10 16.63 L 14.04 22.19 L 10.92 17.46 L 6.24 20.65 L 7.37 15.10 L 1.81 14.04 L 6.54 10.92 L 3.35 6.24 L 8.90 7.37 Z"
      }
    ]
  ]
};

export const VicinoWaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 1.81 L 13.08 6.54 L 17.76 3.35 L 16.63 8.90 L 22.19 9.96 L 17.46 13.08 L 20.65 17.76 L 15.10 16.63 L 14.04 22.19 L 10.92 17.46 L 6.24 20.65 L 7.37 15.10 L 1.81 14.04 L 6.54 10.92 L 3.35 6.24 L 8.90 7.37 Z" />
      {children}
    </svg>
  );
});

export default VicinoWaste;
