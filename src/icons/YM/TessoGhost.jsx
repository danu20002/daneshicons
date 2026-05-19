import React from 'react';

export const iconData = {
  "id": "TessoGhost",
  "name": "TessoGhost",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 8.83 0 1 0 17.65 0 a 8.83 8.83 0 1 0 -17.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 7.59 a 7.64 2.292822306367865 0 1 0 15.29 0 a 7.64 2.292822306367865 0 1 0 -15.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 2.647523151570931 0 1 0 17.65 0 a 8.83 2.647523151570931 0 1 0 -17.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 16.41 a 7.64 2.292822306367865 0 1 0 15.29 0 a 7.64 2.292822306367865 0 1 0 -15.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.17 A 2 2 0 0 0 12.00 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.17 A 2 2 0 0 1 12.00 20.83"
      }
    ]
  ]
};

export const TessoGhost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 12.00 a 8.83 8.83 0 1 0 17.65 0 a 8.83 8.83 0 1 0 -17.65 0" />
      <path d="M 4.36 7.59 a 7.64 2.292822306367865 0 1 0 15.29 0 a 7.64 2.292822306367865 0 1 0 -15.29 0" />
      <path d="M 3.17 12.00 a 8.83 2.647523151570931 0 1 0 17.65 0 a 8.83 2.647523151570931 0 1 0 -17.65 0" />
      <path d="M 4.36 16.41 a 7.64 2.292822306367865 0 1 0 15.29 0 a 7.64 2.292822306367865 0 1 0 -15.29 0" />
      <path d="M 12.00 3.17 A 2 2 0 0 0 12.00 20.83" />
      <path d="M 12.00 3.17 A 2 2 0 0 1 12.00 20.83" />
      {children}
    </svg>
  );
});

export default TessoGhost;
