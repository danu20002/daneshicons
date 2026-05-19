import React from 'react';

export const iconData = {
  "id": "TipoWord",
  "name": "TipoWord",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 12.00 a 4.94 4.94 0 1 0 9.88 0 a 4.94 4.94 0 1 0 -9.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 12.00 a 7.61 7.61 0 1 0 15.21 0 a 7.61 7.61 0 1 0 -15.21 0"
      }
    ]
  ]
};

export const TipoWord = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0" stroke-dasharray="6 2" />
      <path d="M 7.06 12.00 a 4.94 4.94 0 1 0 9.88 0 a 4.94 4.94 0 1 0 -9.88 0" />
      <path d="M 4.39 12.00 a 7.61 7.61 0 1 0 15.21 0 a 7.61 7.61 0 1 0 -15.21 0" />
      {children}
    </svg>
  );
});

export default TipoWord;
