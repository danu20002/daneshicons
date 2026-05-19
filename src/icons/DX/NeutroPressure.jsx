import React from 'react';

export const iconData = {
  "id": "NeutroPressure",
  "name": "NeutroPressure",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.56 16.78 19.72 16.20 Q 16.73 15.67 13.73 15.14 Q 9.59 16.11 5.44 17.08 Q 4.43 17.22 3.41 17.35 Z"
      }
    ]
  ]
};

export const NeutroPressure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.56 16.78 19.72 16.20 Q 16.73 15.67 13.73 15.14 Q 9.59 16.11 5.44 17.08 Q 4.43 17.22 3.41 17.35 Z" />
      {children}
    </svg>
  );
});

export default NeutroPressure;
