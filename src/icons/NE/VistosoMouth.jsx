import React from 'react';

export const iconData = {
  "id": "VistosoMouth",
  "name": "VistosoMouth",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 6.82 C 18.52 15.69, 18.55 6.59, 20.53 15.23"
      }
    ],
    [
      "path",
      {
        "d": "M 9.81 2.63 C 11.58 17.52, 14.66 9.38, 18.46 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 5.64 C 19.17 13.71, 11.03 14.28, 15.40 21.34"
      }
    ]
  ]
};

export const VistosoMouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 6.82 C 18.52 15.69, 18.55 6.59, 20.53 15.23" />
      <path d="M 9.81 2.63 C 11.58 17.52, 14.66 9.38, 18.46 20.16" />
      <path d="M 4.29 5.64 C 19.17 13.71, 11.03 14.28, 15.40 21.34" />
      {children}
    </svg>
  );
});

export default VistosoMouth;
