import React from 'react';

export const iconData = {
  "id": "TondoMolecule",
  "name": "TondoMolecule",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 6.22 L 19.18 6.22 L 19.18 17.78 L 4.82 17.78 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 6.22 L 9.49 1.55 L 23.85 1.55 L 19.18 6.22"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 6.22 L 23.85 1.55 L 23.85 13.10 L 19.18 17.78"
      }
    ]
  ]
};

export const TondoMolecule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 6.22 L 19.18 6.22 L 19.18 17.78 L 4.82 17.78 Z" />
      <path d="M 4.82 6.22 L 9.49 1.55 L 23.85 1.55 L 19.18 6.22" />
      <path d="M 19.18 6.22 L 23.85 1.55 L 23.85 13.10 L 19.18 17.78" />
      {children}
    </svg>
  );
});

export default TondoMolecule;
