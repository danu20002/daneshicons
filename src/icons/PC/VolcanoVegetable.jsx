import React from 'react';

export const iconData = {
  "id": "VolcanoVegetable",
  "name": "VolcanoVegetable",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.71 3.10 L 20.03 7.78 L 20.30 15.65 L 14.33 20.76 L 6.60 19.28 L 2.94 12.32 L 6.10 5.11 Z"
      }
    ]
  ]
};

export const VolcanoVegetable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.71 3.10 L 20.03 7.78 L 20.30 15.65 L 14.33 20.76 L 6.60 19.28 L 2.94 12.32 L 6.10 5.11 Z" />
      {children}
    </svg>
  );
});

export default VolcanoVegetable;
