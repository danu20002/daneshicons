import React from 'react';

export const iconData = {
  "id": "SpheroVegetable",
  "name": "SpheroVegetable",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.08 20.79 L 12.49 17.92 L 7.43 21.66 L 7.12 15.38 L 1.35 12.87 L 6.63 9.46 L 5.92 3.21 L 11.51 6.08 L 16.57 2.34 L 16.88 8.62 L 22.65 11.13 L 17.37 14.54 Z"
      }
    ]
  ]
};

export const SpheroVegetable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.08 20.79 L 12.49 17.92 L 7.43 21.66 L 7.12 15.38 L 1.35 12.87 L 6.63 9.46 L 5.92 3.21 L 11.51 6.08 L 16.57 2.34 L 16.88 8.62 L 22.65 11.13 L 17.37 14.54 Z" />
      {children}
    </svg>
  );
});

export default SpheroVegetable;
