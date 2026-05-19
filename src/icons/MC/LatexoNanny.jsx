import React from 'react';

export const iconData = {
  "id": "LatexoNanny",
  "name": "LatexoNanny",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 6.27 L 20.34 6.27 L 20.34 17.73 L 3.66 17.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 6.27 L 8.20 1.72 L 24.88 1.72 L 20.34 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.34 6.27 L 24.88 1.72 L 24.88 13.19 L 20.34 17.73"
      }
    ]
  ]
};

export const LatexoNanny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 6.27 L 20.34 6.27 L 20.34 17.73 L 3.66 17.73 Z" />
      <path d="M 3.66 6.27 L 8.20 1.72 L 24.88 1.72 L 20.34 6.27" />
      <path d="M 20.34 6.27 L 24.88 1.72 L 24.88 13.19 L 20.34 17.73" />
      {children}
    </svg>
  );
});

export default LatexoNanny;
