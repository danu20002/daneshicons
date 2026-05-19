import React from 'react';

export const iconData = {
  "id": "TitilloGarage",
  "name": "TitilloGarage",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 19.84 C 17.32 20.72, 7.47 9.38, 14.06 10.70"
      }
    ],
    [
      "path",
      {
        "d": "M 13.79 20.97 Q 16.30 14.36 10.02 12.36"
      }
    ],
    [
      "path",
      {
        "d": "M 19.91 18.48 L 19.42 3.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 8.34 A 2.38 3.90 153 0 0 12.68 8.74"
      }
    ]
  ]
};

export const TitilloGarage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 19.84 C 17.32 20.72, 7.47 9.38, 14.06 10.70" />
      <path d="M 13.79 20.97 Q 16.30 14.36 10.02 12.36" />
      <path d="M 19.91 18.48 L 19.42 3.83" />
      <path d="M 7.67 8.34 A 2.38 3.90 153 0 0 12.68 8.74" />
      {children}
    </svg>
  );
});

export default TitilloGarage;
