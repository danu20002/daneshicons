import React from 'react';

export const iconData = {
  "id": "SinoVegetable",
  "name": "SinoVegetable",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.88 2.28 L 20.20 6.45 L 21.72 13.88 L 17.55 20.20 L 10.12 21.72 L 3.80 17.55 L 2.28 10.12 L 6.45 3.80 Z"
      }
    ]
  ]
};

export const SinoVegetable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.88 2.28 L 20.20 6.45 L 21.72 13.88 L 17.55 20.20 L 10.12 21.72 L 3.80 17.55 L 2.28 10.12 L 6.45 3.80 Z" />
      {children}
    </svg>
  );
});

export default SinoVegetable;
