import React from 'react';

export const iconData = {
  "id": "VirgolaTornado",
  "name": "VirgolaTornado",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 5.77 L 19.87 5.77 L 19.87 18.23 L 4.13 18.23 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 5.77 L 8.87 1.03 L 24.61 1.03 L 19.87 5.77"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 5.77 L 24.61 1.03 L 24.61 13.49 L 19.87 18.23"
      }
    ]
  ]
};

export const VirgolaTornado = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 5.77 L 19.87 5.77 L 19.87 18.23 L 4.13 18.23 Z" />
      <path d="M 4.13 5.77 L 8.87 1.03 L 24.61 1.03 L 19.87 5.77" />
      <path d="M 19.87 5.77 L 24.61 1.03 L 24.61 13.49 L 19.87 18.23" />
      {children}
    </svg>
  );
});

export default VirgolaTornado;
