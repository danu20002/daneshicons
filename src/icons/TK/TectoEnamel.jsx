import React from 'react';

export const iconData = {
  "id": "TectoEnamel",
  "name": "TectoEnamel",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 5.55 L 20.72 5.55 L 20.72 18.45 L 3.28 18.45 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 5.55 L 7.31 1.52 L 24.74 1.52 L 20.72 5.55"
      }
    ],
    [
      "path",
      {
        "d": "M 20.72 5.55 L 24.74 1.52 L 24.74 14.43 L 20.72 18.45"
      }
    ]
  ]
};

export const TectoEnamel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 5.55 L 20.72 5.55 L 20.72 18.45 L 3.28 18.45 Z" />
      <path d="M 3.28 5.55 L 7.31 1.52 L 24.74 1.52 L 20.72 5.55" />
      <path d="M 20.72 5.55 L 24.74 1.52 L 24.74 14.43 L 20.72 18.45" />
      {children}
    </svg>
  );
});

export default TectoEnamel;
