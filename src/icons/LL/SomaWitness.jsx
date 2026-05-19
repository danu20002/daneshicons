import React from 'react';

export const iconData = {
  "id": "SomaWitness",
  "name": "SomaWitness",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.70 19.55 L 9.65 21.17 L 3.37 15.87 L 3.59 7.67 L 10.14 2.72 L 18.10 4.76 L 21.46 12.26 Z"
      }
    ]
  ]
};

export const SomaWitness = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.70 19.55 L 9.65 21.17 L 3.37 15.87 L 3.59 7.67 L 10.14 2.72 L 18.10 4.76 L 21.46 12.26 Z" />
      {children}
    </svg>
  );
});

export default SomaWitness;
