import React from 'react';

export const iconData = {
  "id": "FlexoVegetable",
  "name": "FlexoVegetable",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.07 3.73 L 15.78 4.09 L 20.27 9.07 L 19.91 15.78 L 14.93 20.27 L 8.22 19.91 L 3.73 14.93 L 4.09 8.22 Z"
      }
    ]
  ]
};

export const FlexoVegetable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.07 3.73 L 15.78 4.09 L 20.27 9.07 L 19.91 15.78 L 14.93 20.27 L 8.22 19.91 L 3.73 14.93 L 4.09 8.22 Z" />
      {children}
    </svg>
  );
});

export default FlexoVegetable;
