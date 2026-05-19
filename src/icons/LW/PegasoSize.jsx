import React from 'react';

export const iconData = {
  "id": "PegasoSize",
  "name": "PegasoSize",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.38 9.41 L 13.38 9.41"
      }
    ],
    [
      "path",
      {
        "d": "M 13.66 8.70 L 14.89 12.51"
      }
    ],
    [
      "path",
      {
        "d": "M 15.65 12.56 L 12.41 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 12.60 15.64 L 9.36 13.29"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 13.69 L 9.96 9.89"
      }
    ]
  ]
};

export const PegasoSize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.38 9.41 L 13.38 9.41" />
      <path d="M 13.66 8.70 L 14.89 12.51" />
      <path d="M 15.65 12.56 L 12.41 14.91" />
      <path d="M 12.60 15.64 L 9.36 13.29" />
      <path d="M 8.72 13.69 L 9.96 9.89" />
      {children}
    </svg>
  );
});

export default PegasoSize;
