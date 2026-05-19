import React from 'react';

export const iconData = {
  "id": "TitilloEnsure",
  "name": "TitilloEnsure",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.26 6.52 C 11.96 9.94, 14.96 16.05, 14.81 14.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 6.37 C 13.59 17.20, 7.16 11.61, 20.62 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 9.90 C 12.88 12.37, 17.38 11.02, 19.80 19.78"
      }
    ]
  ]
};

export const TitilloEnsure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.26 6.52 C 11.96 9.94, 14.96 16.05, 14.81 14.32" />
      <path d="M 6.24 6.37 C 13.59 17.20, 7.16 11.61, 20.62 16.75" />
      <path d="M 7.39 9.90 C 12.88 12.37, 17.38 11.02, 19.80 19.78" />
      {children}
    </svg>
  );
});

export default TitilloEnsure;
