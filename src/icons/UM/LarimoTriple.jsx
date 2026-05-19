import React from 'react';

export const iconData = {
  "id": "LarimoTriple",
  "name": "LarimoTriple",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.90 8.68 C 5.02 8.70, 15.58 14.29, 19.61 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 3.33 C 11.93 8.52, 7.85 14.46, 15.97 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 8.30 C 15.14 14.86, 16.60 13.14, 15.16 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 5.10 C 4.84 6.38, 7.78 6.94, 14.15 19.41"
      }
    ]
  ]
};

export const LarimoTriple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.90 8.68 C 5.02 8.70, 15.58 14.29, 19.61 20.89" />
      <path d="M 5.77 3.33 C 11.93 8.52, 7.85 14.46, 15.97 14.86" />
      <path d="M 6.03 8.30 C 15.14 14.86, 16.60 13.14, 15.16 19.12" />
      <path d="M 6.46 5.10 C 4.84 6.38, 7.78 6.94, 14.15 19.41" />
      {children}
    </svg>
  );
});

export default LarimoTriple;
