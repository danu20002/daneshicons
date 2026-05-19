import React from 'react';

export const iconData = {
  "id": "LattroNeuron",
  "name": "LattroNeuron",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.61 14.37 L 6.87 9.81 L 6.53 2.86 L 12.50 6.44 L 19.01 3.98 L 17.44 10.76 L 21.80 16.19 L 14.86 16.79 L 11.05 22.61 L 8.33 16.20 Z"
      }
    ]
  ]
};

export const LattroNeuron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.61 14.37 L 6.87 9.81 L 6.53 2.86 L 12.50 6.44 L 19.01 3.98 L 17.44 10.76 L 21.80 16.19 L 14.86 16.79 L 11.05 22.61 L 8.33 16.20 Z" />
      {children}
    </svg>
  );
});

export default LattroNeuron;
