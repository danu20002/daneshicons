import React from 'react';

export const iconData = {
  "id": "LatexoMuch",
  "name": "LatexoMuch",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 12.27 L 9.06 3.82 L 18.87 6.68 L 19.19 16.89 L 9.57 20.35 Z"
      }
    ]
  ]
};

export const LatexoMuch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 12.27 L 9.06 3.82 L 18.87 6.68 L 19.19 16.89 L 9.57 20.35 Z" />
      {children}
    </svg>
  );
});

export default LatexoMuch;
