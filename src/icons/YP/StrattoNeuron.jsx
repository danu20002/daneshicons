import React from 'react';

export const iconData = {
  "id": "StrattoNeuron",
  "name": "StrattoNeuron",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.28 4.74 L 20.54 14.78 L 12.00 20.98 L 3.46 14.77 L 6.72 4.73 Z"
      }
    ]
  ]
};

export const StrattoNeuron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.28 4.74 L 20.54 14.78 L 12.00 20.98 L 3.46 14.77 L 6.72 4.73 Z" />
      {children}
    </svg>
  );
});

export default StrattoNeuron;
